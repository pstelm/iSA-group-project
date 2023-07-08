import React, { useEffect, useState } from 'react';
import styles from './JoinedTrips.module.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { getAuth } from 'firebase/auth';
import TripMini from '../../Trip/TripMini/TripMini';
import { toast } from 'react-hot-toast';
import { firebaseErrors } from '../../../utils/firebaseErrors';
import { Link } from 'react-router-dom';

const JoinedTrips = () => {
	const { currentUser } = getAuth();
	const [joinedTrips, setJoinedTrips] = useState([]);

	const filteredParticipatedTripsCollectionRef = query(
		collection(db, 'Trips'),
		where('participants', 'array-contains', currentUser.uid)
	);

	const getJoinedTrips = async () => {
		try {
			const participatedTripsSnapshot = await getDocs(
				filteredParticipatedTripsCollectionRef
			);
			const participatedTripsData = participatedTripsSnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));

			const joinedTripsData = participatedTripsData.filter(
				(trip) => trip.owner !== currentUser.uid
			);

			setJoinedTrips(joinedTripsData);
		} catch (error) {
			toast.error('Wystąpił błąd: ' + firebaseErrors[error.code]);
		}
	};

	useEffect(() => {
		getJoinedTrips();
	}, []);

	return (
		<>
			<div className={styles.buttonBox}>
				<Link to='/mytrips/ownedtrips' className={styles.myTripsLink}>
					Moje
				</Link>
				<Link
					to='/mytrips/joinedtrips'
					className={`${styles.myTripsLink} ${styles.myTripsLinkActive}`}
				>
					Dołączone
				</Link>
			</div>
			<div className={styles.container}>
				<ul className={styles.trip}>
					{joinedTrips
						? joinedTrips.map((trip) => (
								<TripMini key={trip.id} {...trip} filterOwnership={false} />
						  ))
						: null}
				</ul>
			</div>
		</>
	);
};

export default JoinedTrips;
