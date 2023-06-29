import React, { useEffect, useState } from 'react';
import styles from './AllTrips.module.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';
import useAuth from '../../contexts/AuthContext';
import TripMini from '../Trip/TripMini/TripMini';

const AllTrips = () => {
	const { currentUser } = useAuth();
	const [trips, setTrips] = useState([]);

	// Pobieram referencję do wszystkich wycieczek, których aktualnie zalogowany user nie jest właścicielem
	const filteredTripsCollectionRef = query(
		collection(db, 'Trips'),
		where('owner', '!=', currentUser.uid)
	);

	const getTrips = async () => {
		try {
			const tripsSnapshot = await getDocs(filteredTripsCollectionRef);
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
	}, []);

	return (
		<div className={styles.container}>
			<h3>Podróżuj</h3>
			<ul>
				{trips ? trips.map((trip) => <TripMini key={trip.id} {...trip} />) : null}
			</ul>
		</div>
	);
};

export default AllTrips;
