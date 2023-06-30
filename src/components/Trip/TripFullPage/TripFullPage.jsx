import React, { useEffect, useState } from 'react';
import styles from './TripFullPage.module.css';
import { useParams } from 'react-router-dom';
import { getUserData } from '../../../utils/getUserData';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { toast } from 'react-hot-toast';

const TripFullPage = () => {
	const { tripID } = useParams();

	const [trip, setTrip] = useState();
	const [participantsDataArr, setParticipantsDataArr] = useState();

	const getTrip = async () => {
		const tripRef = await doc(db, 'Trips', tripID);

		return await getDoc(tripRef).then((tripSnap) => {
			setTrip({
				id: tripID,
				...tripSnap.data(),
			});
			getParticipants(tripSnap.data().participants);
		});
	};

	const getParticipants = async (tripParticipantsArr) => {
		const participantsDataResolved = await Promise.all(
			tripParticipantsArr.map((item) => {
				const partRef = doc(db, 'Users', item);
				return getDoc(partRef).then((userSnapshot) => {
					const userDataFiltered = {
						id: item,
						...userSnapshot.data(),
					};
					return userDataFiltered;
				});
			})
		);

		// Te kompenntarze na razie niech zostaną, bo mam dużo pytań przyszykowanych na sobotę i dzięki nim będę o tym pamiętać ;D
		// setParticipantsDataArr(participantsDataResolved);
		// console.log('participantsDataArr: ', participantsDataArr);
	};

	useEffect(() => {
		getTrip();
		// getTrip().then((tripSnap) => {
		// 	getParticipants(tripSnap);
		// });
	}, []);

	return (
		<>
			{trip ? (
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
						<p>Koniec: {trip.endDate.toDate().toLocaleDateString()}</p>
						{participantsDataArr &&
						participantsDataArr.length < trip.maxParticipantsCount ? (
							<button className={styles.addToTripBtn}>Dołącz do podróży</button>
						) : (
							<button className={styles.addToTripBtnDisabled} disabled>
								Mamy już komplet!
							</button>
						)}

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
							{participantsDataArr
								? participantsDataArr.map((participant) => {
										return (
											<p key={participant.id} className={styles.participant}>
												{participant.firstName} {participant.lastName}
											</p>
										);
								  })
								: null}
						</div>

						<div className={styles.box}>
							<h4 className={styles.sectionTitle}>Opis podróży</h4>
							<p>{trip.info}</p>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default TripFullPage;
