import React, { useEffect, useState } from 'react';
import styles from './AllTrips.module.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';
import TripMini from '../Trip/TripMini/TripMini';
import { toast } from 'react-hot-toast';

const AllTrips = () => {
	const [trips, setTrips] = useState([]);

	const getTrips = async () => {
		try {
			const tripsSnapshot = await getDocs(collection(db, 'Trips'));
			const tripsData = tripsSnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setTrips(tripsData);
		} catch (error) {
			toast.error('Ta podróż już nie istnieje');
		}
	};

	useEffect(() => {
		getTrips();
	}, []);

	return (
		<div className={styles.container}>
			<h3>Podróżuj</h3>
			<ul>
				{trips ? (
					trips.map((trip) => <TripMini key={trip.id} {...trip} />)
				) : (
					<p>Trwa ładowanie.</p>
				)}
			</ul>
		</div>
	);
};

export default AllTrips;
