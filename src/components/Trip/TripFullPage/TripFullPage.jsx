import React, { useEffect, useState } from 'react';
import styles from './TripFullPage.module.css';
import { useParams } from 'react-router-dom';
import { getUserData } from '../../../utils/getUserData';
import { doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../../config/firebase';

const TripFullPage = () => {
	const { tripID } = useParams();

	const [trip, setTrip] = useState();
	const [participant, setParticipant] = useState();

	const getTrip = async () => {
		const tripRef = await doc(db, 'Trips', tripID);

		return await getDoc(tripRef).then((tripSnap) => {
			setTrip({ id: tripID, ...tripSnap.data() });
			// console.log(tripSnap.data());
			// getParticipants(tripSnap.data().participants);
			// getParticipants();
		});
	};

	const getParticipants = async () => {
		console.log('Uczestnicy: ', trip.participants);
		const participantsData = [];

		trip.participants.forEach((item) => {
			// console.log(item);
			const partRef = doc(db, 'Users', item);
			getDoc(partRef).then((partSnap) => {
				const part = { id: item, ...partSnap.data() };
				console.log(part);
			});
			// const part = { id: item, ...partSnap.data() };
		});
		// const participantsData = tripSnapshot.participants.map((person) => {
		// 	console.log('Person: ', person);
		// 	const docRef = doc(db, 'Users', person);
		// 	const docData = getDoc(docRef);
		// 	console.log(docData.data());
		// 	// person = participant;
		// });

		// // console.log(participantsData);
		return participantsData;
	};

	useEffect(() => {
		// getTrip();
		getTrip().then((tripSnapshot) => {
			getParticipants();
		});
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
						<button className={styles.addToTripBtn}>Dołącz do podróży</button>

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
							<h4 className={styles.sectionTitle}>Uczestnicy</h4>
							<p>{trip.participants.join(', ')}</p>
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
