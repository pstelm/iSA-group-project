import React, { useEffect, useState } from 'react';
import styles from './AllTrips.module.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import useAuth from '../../contexts/AuthContext';
import Trip from '../Trip/Trip';

const AllTrips = () => {
	const { currentUser } = useAuth();
	const allTripsCollectionRef = collection(db, 'Trips');
	const [trips, setTrips] = useState([]);

	const getTrips = async () => {
		try {
			const tripsSnapshot = await getDocs(allTripsCollectionRef);
			const tripsData = tripsSnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setTrips(tripsData);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getTrips();
		// console.log(trips);
	}, []);

	return (
		<div className={styles.container}>
			<h4>Podróżuj</h4>
			<ul>
				{trips ? trips.map((trip) => <Trip key={trip.id} {...trip} />) : null}
			</ul>
		</div>
	);
};

export default AllTrips;
