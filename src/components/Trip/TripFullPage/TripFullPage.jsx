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
import { Popup } from 'reactjs-popup';
import useAuth from '../../../contexts/AuthContext';
import BackButton from '../../BackButton/BackButton';
import { getDownloadURL, getStorage, ref } from '@firebase/storage';

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
	const [participantImgURL, setParticipantImgURL] = useState();

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
		// console.log(participantsFilteredArray);
		setParticipantsData(participantsFilteredArray);

		const participantsWithImages = participantsFilteredArray.map(async (item) => {
			const imageRef = ref(storage, `usersProfilePhoto/${item.id}.jpg`);
			// console.log(imageRef);
			return await getDownloadURL(imageRef).then((url) => {
				// setParticipantImgURL(url);
				console.log(url);
				return {
					imgURL: url,
					...item,
				};
			});
		});
		Promise.all(participantsWithImages).then((uuu) => {
			setParticipantsDataWithImg(uuu);
			console.log('UUU', uuu);
		});

		console.log(participantsDataWithImg);
	};

	// const getParticipantsImages = (participantsFilteredArray) => {

	// };

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
					<BackButton sectionTitle={'Podróże'} />

					{/* Przyciski Dołącz do podróży oraz Usuń podróż wraz z logiką */}
					{trip.owner === currentUser.uid ? (
						<Popup
							trigger={<button className={styles.deleteTripBtn}> Usuń podróż </button>}
							modal
							nested
						>
							{(close) => (
								<div className={styles.overlay}>
									<div className={styles.modal}>
										<button className={styles.close_sign} onClick={close}>
											&times;
										</button>
										<div className={styles.modal_header}>
											Czy na pewno chcesz usunąć tę podróż?
										</div>
										<p className={styles.modal_additional_info}>
											Spowoduje to trwałe usunięcie podróży.
										</p>
										<div className={styles.actions}>
											<button
												className={`${styles.actions_btn} + ${styles.actions_btn_cancel}`}
												onClick={() => close()}
											>
												Powrót
											</button>
											<button
												className={`${styles.actions_btn} + ${styles.actions_btn_confirm}`}
												onClick={() => {
													handleDeleteTripClick();
													close();
												}}
											>
												Potwierdź
											</button>
										</div>
									</div>
								</div>
							)}
						</Popup>
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
										src='/assets/default.png'
										alt={`Przykładowe zdjęcie podrózy`}
										className={styles.tripHeaderImg}
									/>
								)}
							</div>
							<div className={styles.tripHeaderInfo}>
								<h4 className={styles.tripTitle}>{trip.title}</h4>
								<div className={styles.oneLine}>
									<img
										className={styles.icon}
										src='/assets/icons/location-dot-main-light.svg'
										alt=''
									/>
									<p>{trip.toCountry}</p>
								</div>
								<div className={styles.oneLine}>
									<img
										className={styles.icon}
										src='/assets/icons/calendar-days-main-light.svg'
										alt=''
									/>
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
															className={styles.participantImg}
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
