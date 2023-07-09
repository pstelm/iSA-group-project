import React, { useEffect, useState } from 'react';
import styles from './AllTrips.module.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';
import TripMini from '../Trip/TripMini/TripMini';
import { toast } from 'react-hot-toast';
import useAuth from '../../contexts/AuthContext';
import BackButton from '../BackButton/BackButton';
import Tags from '../AddTrip/Tags/Tags';
import tagsData from '../AddTrip/Tags/tags.json';
import Filters from './Filters/Filters';

const AllTrips = () => {
	const [allTrips, setAllTrips] = useState([]);
	const [filteredTrips, setFilteredTrips] = useState([]);
	const [selectedTags, setSelectedTags] = useState([]);
	const [searchedText, setSearchedText] = useState('');
	const [showFilters, setShowFilters] = useState(false);

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

	const handleShowFilters = () => {
		setShowFilters(!showFilters);
	};

	const filterByTags = (trip) => {
		return selectedTags.every((selectedTag) => trip.tags.includes(selectedTag));
	};

	const filterByInput = (trip, text) => {
		if (!text) {
			return true;
		} else {
			return trip && trip.title.toLowerCase().includes(text.toLowerCase());
		}
	};

	const filterTrips = (text) => {
		const searchedTrips = allTrips
			.filter(filterByTags)
			.filter((trip) => filterByInput(trip, text));
		setFilteredTrips(searchedTrips);
	};

	useEffect(() => {
		getTrips();
		setSelectedTags([]);
	}, []);

	useEffect(() => {
		filterTrips(searchedText);
	}, [selectedTags, searchedText]);

	return (
		<div className={styles.pageContent}>
			<BackButton sectionTitle={'Podróżuj'} />

			<div className={styles.container}>
				<div className={styles.filtersBox}>
					<div className={styles.searchbarBox}>
						<input
							className={styles.searchbarInput}
							onChange={(e) => {
								setSearchedText(e.target.value);
								// filterTrips(e.target.value);
							}}
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
					<button
						className={styles.filtersBtn}
						type='button'
						onClick={handleShowFilters}
					>
						<img src='/src/assets/icons/filters.svg' alt='Filtruj' />
					</button>

					{showFilters && <Filters />}

					<div className={styles.tagsBox}>
						<Tags
							tags={tagsData}
							selectedTags={selectedTags}
							setSelectedTags={setSelectedTags}
						/>
					</div>
				</div>

				<ul className={styles.tripsList}>
					{filteredTrips ? (
						filteredTrips.map((trip) => (
							<TripMini key={trip.id} {...trip} filterOwnership={true} />
						))
					) : (
						<p>Trwa ładowanie.</p>
					)}
				</ul>
			</div>
		</div>
	);
};

export default AllTrips;
