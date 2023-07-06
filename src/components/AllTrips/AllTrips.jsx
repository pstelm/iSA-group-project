import React, { useEffect, useState } from 'react';
import styles from './AllTrips.module.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';
import TripMini from '../Trip/TripMini/TripMini';
import { toast } from 'react-hot-toast';
import useAuth from '../../contexts/AuthContext';
import BackButton from '../BackButton/BackButton';

const AllTrips = () => {
	const { currentUser } = useAuth();
	const [allTrips, setAllTrips] = useState([]);
	const [filteredTrips, setFilteredTrips] = useState([]);

	// Pobieram referencję do wszystkich wycieczek, których aktualnie zalogowany user nie jest właścicielem
	// const filteredTripsCollectionRef = query(
	// 	collection(db, 'Trips'),
	// 	where('owner', '!=', currentUser.uid)
	// );

	const getTrips = async () => {
		try {
			const tripsSnapshot = await getDocs(collection(db, 'Trips'));
			const tripsData = tripsSnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setAllTrips(tripsData);
			setFilteredTrips(tripsData);
		} catch (error) {
			toast.error('Ta podróż już nie istnieje');
		}
	};

	const handleInputSearch = (searchedText) => {
		if (!searchedText) {
			getTrips();
		} else {
			const searchedTrips = allTrips.filter((trip) => {
				return (
					trip && trip.title.toLowerCase().includes(searchedText.toLowerCase())
				);
			});
			setFilteredTrips(searchedTrips);
		}
	};

	useEffect(() => {
		getTrips();
	}, []);

	return (
		<div className={styles.pageContent}>
			<BackButton sectionTitle={'Podróżuj'} />

			<div className={styles.container}>
				<div className={styles.filtersBox}>
					<div className={styles.searchbarBox}>
						<input
							className={styles.searchbarInput}
							onChange={(e) => handleInputSearch(e.target.value)}
							type='text'
							name='searchbar'
							placeholder='Wpisz, czego szukasz'
						/>
						<div className={styles.searchbarInputIcon}>
							<img
								src='/src/assets/icons/magnifying-glass.svg'
								alt='Przycisk szukaj'
							/>
						</div>
					</div>
					<button className={styles.filtersBtn} type='button'>
						<img src='/src/assets/icons/filters.svg' alt='Filtruj' />
					</button>
					<div className={styles.tagsBox}></div>
				</div>

				<ul className={styles.tripsList}>
					{filteredTrips ? (
						filteredTrips.map((trip) => <TripMini key={trip.id} {...trip} />)
					) : (
						<p>Trwa ładowanie.</p>
					)}
				</ul>
			</div>
		</div>
	);
};

export default AllTrips;
