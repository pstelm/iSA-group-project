import React, { useEffect, useState } from 'react';
import styles from './TripFullPage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
// import { getUserData } from '../../../utils/getUserData';
import {
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
} from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { toast } from 'react-hot-toast';
import { Popup } from 'reactjs-popup';
import useAuth from '../../../contexts/AuthContext';

const TripFullPage = () => {
	const { tripID } = useParams();

	const { currentUser } = useAuth();

	const [trip, setTrip] = useState();
	const [users, setUsers] = useState();
	const [participantsData, setParticipantsData] = useState();

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

	const getParticipants = () => {
		const participantsFilteredArray = users.filter((doc) => {
			return trip?.participants.some((partID) => doc.id.includes(partID));
		});
		setParticipantsData(participantsFilteredArray);
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
			getParticipants();
		}
	}, [users, trip]);

	return (
		<>
			{participantsData ? (
				<div className={styles.container}>
					<h3>Podróże</h3>

					<div className={styles.tripCard}>
						<h4 className={styles.title}>{trip.title}</h4>
						<div className={styles.oneLine}>
							<img
								className={styles.icon}
								src='/src/assets/icons/location-dot-solid.svg'
								alt=''
							/>
							<p>{trip.endPlace}</p>
						</div>
						<div className={styles.oneLine}>
							<img
								className={styles.icon}
								src='/src/assets/icons/calendar-days-regular.svg'
								alt=''
							/>
							<p>Termin podróży:</p>
						</div>
						<p>Początek: {trip.startDate.toDate().toLocaleDateString()}</p>
						{trip.owner === currentUser.uid ? (
							<Popup
								trigger={
									<button className={styles.deleteTripBtn}> Usuń podróż </button>
								}
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
								<button className={styles.addToTripBtn}>Dołącz do podróży</button>
							) : (
								<button className={styles.addToTripBtnDisabled} disabled>
									Mamy już komplet!
								</button>
							)
						) : null}

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
							{participantsData
								? participantsData.map((participant) => {
										if (participant.id === trip.owner) {
											return (
												<p key={participant.id} className={styles.owner}>
													{participant.firstName} {participant.lastName} - Organizator
												</p>
											);
										} else {
											return (
												<p key={participant.id} className={styles.participant}>
													{participant.firstName} {participant.lastName}
												</p>
											);
										}
								  })
								: null}
						</div>

						<div className={styles.box}>
							<h4 className={styles.sectionTitle}>Opis podróży</h4>
							<p>{trip.info}</p>
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
