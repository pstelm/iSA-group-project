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
						<p></p>
						{/* <p>TripID: {tripID}</p> */}
					</div>
				</div>
			) : null}
		</>
	);
};

export default TripFullPage;
