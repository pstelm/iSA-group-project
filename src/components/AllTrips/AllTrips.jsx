import React, { useEffect, useState } from 'react';
import styles from './AllTrips.module.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import TripMini from '../Trip/TripMini/TripMini';
import { toast } from 'react-hot-toast';
import BackButton from '../BackButton/BackButton';
import Tags from '../AddTrip/Tags/Tags';
import tagsData from '../AddTrip/Tags/tags.json';
import Filters from './Filters/Filters';
import iconMagnifyingGlass from '/public/assets/icons/magnifying-glass.svg';
import iconFilters from '/public/assets/icons/filters.svg';

const AllTrips = () => {
	const [allTrips, setAllTrips] = useState([]);
	const [filteredTrips, setFilteredTrips] = useState([]);
	const [selectedTags, setSelectedTags] = useState([]);
	const [searchedText, setSearchedText] = useState('');
	const [showFilters, setShowFilters] = useState(false);
	const [additionalFilters, setAdditionalFilters] = useState({});
	// dodałam state topBudgetOfAllTrips, żeby móc wyświetlać max kwotę za wycieczkę w inpucie filtra budżetu; czyli dałoby się filtrowac bez tego (musiałabym nieco zmienić logikę filtrowania), ale wydaje mi się, że tak jest ładniej :)
	const [topBudgetOfAllTrips, setTopBudgetOfAllTrips] = useState();

	const getTrips = async () => {
		try {
			const tripsSnapshot = await getDocs(collection(db, 'Trips'));
			const tripsData = tripsSnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));

			const currentTripsData = tripsData.filter(
				(trip) => trip.startDate.toDate() > new Date()
			);

			setAllTrips(currentTripsData);
			setFilteredTrips(currentTripsData);
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

	const filterByCountry = (trip) => {
		if (additionalFilters.countries.length === 0) {
			return true;
		} else {
			return additionalFilters.countries.includes(trip.toCountry);
		}
	};

	const filterByBudget = (trip) => {
		if (
			trip.budget >= additionalFilters.minBudget &&
			trip.budget <= additionalFilters.maxBudget
		) {
			return true;
		}
	};

	const filterByDate = (trip) => {
		if ((additionalFilters.fromDate === '') & (additionalFilters.toDate === '')) {
			return true;
		} else if (
			(additionalFilters.fromDate !== '') &
			(additionalFilters.toDate === '')
		) {
			return trip.startDate.toDate().getTime() >=
				additionalFilters.fromDate.getTime()
				? true
				: false;
		} else if (
			(additionalFilters.fromDate === '') &
			(additionalFilters.toDate !== '')
		) {
			return trip.endDate.toDate().getTime() <= additionalFilters.toDate.getTime()
				? true
				: false;
		} else {
			return (trip.startDate.toDate().getTime() >=
				additionalFilters.fromDate.getTime()) &
				(trip.endDate.toDate().getTime() <= additionalFilters.toDate.getTime())
				? true
				: false;
		}
	};

	const filterTrips = (text) => {
		const searchedTrips = allTrips
			.filter(filterByTags)
			.filter((trip) => filterByInput(trip, text))
			.filter((trip) => filterByCountry(trip))
			.filter((trip) => filterByBudget(trip))
			.filter((trip) => filterByDate(trip));
		setFilteredTrips(searchedTrips);
	};

	useEffect(() => {
		getTrips();
		setSelectedTags([]);
	}, []);

	useEffect(() => {
		setTopBudgetOfAllTrips(
			allTrips.reduce(function (acc, trip) {
				return acc > trip.budget ? acc : trip.budget;
			}, 0)
		);

		setAdditionalFilters({
			countries: [],
			minBudget: 0,
			maxBudget: allTrips.reduce(function (acc, trip) {
				return acc > trip.budget ? acc : trip.budget;
			}, 0),
			fromDate: '',
			toDate: '',
		});
		// console.log('start: ', additionalFilters);
	}, [allTrips]);

	useEffect(() => {
		filterTrips(searchedText);
	}, [selectedTags, searchedText, additionalFilters]);

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
							}}
							type='text'
							name='searchbar'
							placeholder='Wpisz, czego szukasz'
						/>
						<div className={styles.searchbarInputIcon}>
							<img src={iconMagnifyingGlass} alt='' />
						</div>
					</div>
					<button
						className={styles.filtersBtn}
						type='button'
						onClick={handleShowFilters}
					>
						<img src={iconFilters} alt='Filtruj' />
					</button>

					{showFilters && (
						<Filters
							additionalFilters={additionalFilters}
							setAdditionalFilters={setAdditionalFilters}
							topBudgetOfAllTrips={topBudgetOfAllTrips}
						/>
					)}

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
