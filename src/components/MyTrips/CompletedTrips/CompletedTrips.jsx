import React, { useEffect, useState } from 'react';
import styles from './CompletedTrips.module.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { getAuth } from 'firebase/auth';
import TripMini from '../../Trip/TripMini/TripMini';
import { toast } from 'react-hot-toast';
import { firebaseErrors } from '../../../utils/firebaseErrors';
import { Link } from 'react-router-dom';

const CompletedTrips = () => {
	const { currentUser } = getAuth();
	const [completedTrips, setCompletedTrips] = useState([]);

	const filteredParticipatedTripsCollectionRef = query(
		collection(db, 'Trips'),
		where('participants', 'array-contains', currentUser.uid)
	);

	const getCompletedTrips = async () => {
		try {
			const participatedTripsSnapshot = await getDocs(
				filteredParticipatedTripsCollectionRef
			);
			const participatedTripsData = participatedTripsSnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));

			const completedTripsData = participatedTripsData.filter(
				(trip) => trip.endDate.toDate() < new Date()
			);

			setCompletedTrips(completedTripsData);
		} catch (error) {
			toast.error('Wystąpił błąd: ' + firebaseErrors[error.code]);
		}
	};

	useEffect(() => {
		getCompletedTrips();
	}, []);

	return (
		<>
			<div className={styles.buttonBox}>
				<Link to='/mytrips/ownedtrips' className={styles.myTripsLink}>
					Moje
				</Link>
				<Link to='/mytrips/joinedtrips' className={styles.myTripsLink}>
					Dołączone
				</Link>
				<Link
					to='/mytrips/completedtrips'
					className={`${styles.myTripsLink} ${styles.myTripsLinkActive}`}
				>
					Zakończone
				</Link>
			</div>
			<div className={styles.container}>
				<ul className={styles.trip}>
					{completedTrips
						? completedTrips.map((trip) => (
								<TripMini key={trip.id} {...trip} filterOwnership={false} />
						  ))
						: null}
				</ul>
			</div>
		</>
	);
};

export default CompletedTrips;
