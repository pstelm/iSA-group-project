import React, { useEffect, useState } from 'react';
import styles from './TripFullPage.module.css';
import { useParams } from 'react-router-dom';
import { getUserData } from '../../../utils/getUserData';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';

const TripFullPage = () => {
	const { tripID } = useParams();

	const [trip, setTrip] = useState();

	const getTrip = async () => {
		const tripRef = await doc(db, 'Trips', tripID);

		return await getDoc(tripRef).then((tripSnap) => {
			setTrip({ id: tripID, ...tripSnap.data() });
		});
	};

	useEffect(() => {
		getTrip();
		console.log(trip);
	}, []);

	return (
		<>
			{trip ? (
				<div className={styles.tripCard}>
					<h3>Podróże</h3>
					<h4>{trip.title}</h4>
					<p>TripID: {tripID}</p>
				</div>
			) : null}
		</>
	);
};

export default TripFullPage;
