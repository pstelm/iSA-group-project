import React, { useEffect, useState } from 'react';
import styles from './TripFullPage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import {
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	updateDoc,
} from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { toast } from 'react-hot-toast';
import useAuth from '../../../contexts/AuthContext';
import BackButton from '../../BackButton/BackButton';
import { Link } from 'react-router-dom';
import { ModalPopup } from '../../../components';
import { getDownloadURL, getStorage, ref } from '@firebase/storage';
import iconLocation from '/public/assets/icons/location-dot-main-light.svg';
import iconCalendar from '/public/assets/icons/calendar-days-main-light.svg';
import iconEdit from '/public/assets/icons/pen.png';

const TripFullPage = () => {
	const { tripID } = useParams();

	const storage = getStorage();
	const { currentUser } = useAuth();

	const [trip, setTrip] = useState();
	const [users, setUsers] = useState();
	const [tripDuration, setTripDuration] = useState('');
	const [tripImgURL, setTripImgURL] = useState();
	const [participantsData, setParticipantsData] = useState();
	const [participantsDataWithImg, setParticipantsDataWithImg] = useState([]);
	const defaultImgURL =
		'https://firebasestorage.googleapis.com/v0/b/promises-land.appspot.com/o/tripsPhoto%2Fdefault.png?alt=media&token=179f10ed-72cc-40a8-bef4-2a76ba77f98f';

	const tripRef = doc(db, 'Trips', tripID);

	const navigate = useNavigate();

	const getUsers = async () => {
		const usersRef = collection(db, 'Users');

		try {
			const usersSnap = await getDocs(usersRef);
			const usersFilteredData = usersSnap.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setUsers(usersFilteredData);
			getTrip();
		} catch (error) {
			console.error(error);
			toast.error('Błąd serwera');
		}
	};

	const getTrip = async () => {
		try {
			const tripSnap = await getDoc(tripRef);
			if (tripSnap.exists()) {
				const tripFilteredData = tripSnap.data();
				setTrip(tripFilteredData);
			} else {
				toast.error('Ta wycieczka została usunięta');
			}
		} catch (error) {
			console.error(error);
			toast.error('Błąd serwera');
		}
	};

	const getParticipantsData = async () => {
		const participantsFilteredArray = users.filter((doc) => {
			return trip?.participants.some((partID) => doc.id.includes(partID));
		});
		setParticipantsData(participantsFilteredArray);

		const participantsWithImages = participantsFilteredArray.map(async (item) => {
			const imageRef = ref(storage, `usersProfilePhoto/${item.id}.jpg`);
			return await getDownloadURL(imageRef)
				.then((url) => {
					return {
						imgURL: url,
						...item,
					};
				})
				.catch((error) => {
					return {
						imgURL:
							'https://firebasestorage.googleapis.com/v0/b/promises-land.appspot.com/o/usersProfilePhoto%2Fdefault-user-image.svg?alt=media&token=51cfbe1c-fb80-4d7f-bc54-cd59b95361aa',
						...item,
					};
				});
		});
		Promise.all(participantsWithImages).then((uuu) => {
			setParticipantsDataWithImg(uuu);
		});
	};

	const getTripDuration = () => {
		let tripDurationText = '';
		const startDay = trip.startDate.toDate().getDate();
		const startMonth = trip.startDate.toDate().getMonth() + 1;
		const startYear = trip.endDate.toDate().getFullYear();

		const endDay = trip.endDate.toDate().getDate();
		const endMonth = trip.endDate.toDate().getMonth() + 1;
		const endYear = trip.endDate.toDate().getFullYear();

		if (startYear === endYear && startMonth === endMonth) {
			tripDurationText = startDay + '-' + endDay + '.' + endMonth + '.' + endYear;
		} else if (startYear === endYear) {
			tripDurationText =
				startDay + '.' + startMonth + '-' + endDay + '.' + endMonth + '.' + endYear;
		} else {
			tripDurationText =
				startDay +
				'.' +
				startMonth +
				'.' +
				startYear +
				'-' +
				endDay +
				'.' +
				endMonth +
				'.' +
				endYear;
		}
		setTripDuration(tripDurationText);
	};

	const getTripImage = async () => {
		const imgPathReference = ref(storage, `tripsPhoto/${tripID}.jpg`);
		getDownloadURL(imgPathReference)
			.then((url) => {
				setTripImgURL(url);
			})
			.catch((error) => {
				// if (error.code !== 'storage/object-not-found') {
				// 	// setTripImgURL()
				console.log(error.message);
				// }
			});
	};

	const handleAddToTrip = async () => {
		try {
			const participantsIdArray = [...trip.participants];
			participantsIdArray.push(currentUser.uid);
			await updateDoc(tripRef, { participants: participantsIdArray });
			toast.success('Dodano do podróży');
			navigate('/mytrips/joinedtrips');
		} catch (error) {
			toast.error('Błąd serwera');
		}
	};

	const handleDeleteTripClick = async () => {
		try {
			await deleteDoc(tripRef);
			toast.success('Pomyślnie usunięto wycieczkę');
			navigate('/mytrips/ownedtrips');
		} catch (error) {
			toast.error('Błąd serwera');
		}
	};

	const handleLeaveTrip = async () => {
		try {
			const participantsIdArray = [...trip.participants];
			const participantsIdArrayUpdated = participantsIdArray.filter(
				(participant) => participant !== currentUser.uid
			);
			await updateDoc(tripRef, { participants: participantsIdArrayUpdated });
			toast.success('Opuszczono podróż');
			navigate('/mytrips/joinedtrips');
		} catch (error) {
			toast.error('Błąd serwera');
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	useEffect(() => {
		if (users && trip) {
			getParticipantsData();
			getTripDuration();
			getTripImage();
		}
	}, [users, trip]);

	return (
		<>
			{participantsData ? (
				<div className={styles.container}>
					<div className={styles.header_container}>
						<BackButton sectionTitle={'Podróże'} />

						{trip.owner === currentUser.uid ? (
							<div className={styles.edit_trip_container}>
								<button className={styles.edit_trip_btn}>
									<Link
										to={`/trip/${tripID}/edittrip`}
										className={styles.link_edit_trip}
									>
										<img src={iconEdit} className={styles.icon_edit_trip} />
									</Link>
								</button>
							</div>
						) : null}
					</div>

					{/* Przyciski Dołącz do podróży oraz Usuń podróż wraz z logiką */}
					{trip.owner === currentUser.uid ? (
						<ModalPopup
							triggerBtn={
								<button className={styles.deleteTripBtn}> Usuń podróż </button>
							}
							modalHeader='Czy na pewno chcesz usunąć tę podróż?'
							modalAdditionalInfo='Spowoduje to trwałe usunięcie podróży.'
							handleConfirmCancelationClick={handleDeleteTripClick}
						/>
					) : !participantsData.some((item) => item.id === currentUser.uid) ? (
						participantsData &&
						participantsData.length < trip.maxParticipantsCount ? (
							<button className={styles.addToTripBtn} onClick={handleAddToTrip}>
								Dołącz do podróży
							</button>
						) : (
							<button className={styles.addToTripBtnDisabled} disabled>
								Dołącz do podróży
							</button>
						)
					) : participantsData.some((item) => item.id === currentUser.uid) ? (
						participantsData && trip.endDate.toDate() > new Date() ? (
							<ModalPopup
								triggerBtn={
									<button className={styles.leaveTripBtn}>Opuść podróż</button>
								}
								modalHeader='Czy na pewno chcesz opuścić tę podróż?'
								modalAdditionalInfo='Spowoduje to trwałe usunięcie Cię z podróży.'
								handleConfirmCancelationClick={handleLeaveTrip}
							/>
						) : null
					) : null}

					{/* Informacje dotyczące podróży */}
					<div className={styles.tripCard}>
						<div className={styles.tripHeader}>
							<div className={styles.tripHeaderImgBox}>
								{tripImgURL ? (
									<img
										src={tripImgURL}
										alt={`Zdjęcie podróży ${trip.title}`}
										className={styles.tripHeaderImg}
									/>
								) : (
									<img
										src={defaultImgURL}
										alt={`Przykładowe zdjęcie podrózy`}
										className={styles.tripHeaderImg}
									/>
								)}
							</div>
							<div className={styles.tripHeaderInfo}>
								<h4 className={styles.tripTitle}>{trip.title}</h4>
								<div className={styles.oneLine}>
									<img className={styles.icon} src={iconLocation} alt='' />
									<p>{trip.toCountry}</p>
								</div>
								<div className={styles.oneLine}>
									<img className={styles.icon} src={iconCalendar} alt='' />
									<p>{tripDuration}</p>
								</div>
							</div>
						</div>

						<div className={styles.tagsBox}>
							{trip.tags.map((tag) => {
								return (
									<span key={tag} className={styles.tag}>
										{tag}
									</span>
								);
							})}
						</div>

						<div className={styles.box}>
							<h4 className={styles.sectionTitle}>Skąd ruszamy</h4>
							<p>
								{trip.fromCity}, {trip.fromCountry}
							</p>
						</div>

						<div className={styles.box}>
							<h4 className={styles.sectionTitle}>Dokąd się wybieramy</h4>
							<p>
								{trip.toCity}, {trip.toCountry}
							</p>
						</div>

						<div className={styles.box}>
							<h4 className={styles.sectionTitle}>
								<span>Uczestnicy</span>
								<span>max. {trip.maxParticipantsCount}</span>
							</h4>
							<ul className={styles.participantsList}>
								{participantsDataWithImg
									? participantsDataWithImg.map((participant) => {
											if (participant.id === trip.owner) {
												return (
													<li key={participant.id} className={styles.owner}>
														<img
															src={participant.imgURL}
															className={styles.ownerImg}
															alt={`Awatar użytkownike ${participant.firstName} ${participant.lastName}`}
														/>
														<p>
															{participant.firstName} {participant.lastName} - Organizator
														</p>
													</li>
												);
											} else {
												return (
													<li key={participant.id} className={styles.participant}>
														<img
															src={participant.imgURL}
															className={styles.participantImg}
															alt={`Awatar użytkownike ${participant.firstName} ${participant.lastName}`}
														/>
														<p>
															{participant.firstName} {participant.lastName}
														</p>
													</li>
												);
											}
									  })
									: null}
							</ul>
						</div>

						<div className={styles.box}>
							<h4 className={styles.sectionTitle}>Opis podróży</h4>
							<p>{trip.info}</p>
						</div>

						<div className={styles.box}>
							<h4 className={styles.sectionTitle}>Budżet</h4>
							<p>{trip.budget} zł/os.</p>
						</div>
					</div>
				</div>
			) : (
				<p>Trwa ładowanie</p>
			)}
		</>
	);
};

export default TripFullPage;
