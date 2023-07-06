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

	const handleInputSearch = async (e) => {
		const searchedTrips = e.target.searchbar.value;
	};

	useEffect(() => {
		getTrips();
	}, []);

	return (
		<div className={styles.container}>
			<h3>Podróżuj</h3>
			<div className={styles.filtersBox}>
				<div className={styles.searchInputBox}>
					<input
						onChange={handleInputSearch}
						type='text'
						name='searchbar'
						placeholder='Wpisz, czego szukasz'
					/>
					<button className={styles.searchInputBtn} type='submit'>
						<img src='/src/assets/icons/magnifying-glass.svg' alt='Przycisk szukaj' />
					</button>
				</div>
				<button className={styles.filtersBtn} type='button'>
					<img src='/src/assets/icons/filters.svg' alt='Filtruj' />
				</button>
				<div className={styles.tagsBox}></div>
			</div>
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
