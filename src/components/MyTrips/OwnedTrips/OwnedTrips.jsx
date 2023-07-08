import React, { useEffect, useState } from 'react';
import styles from './OwnedTrips.module.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { getAuth } from 'firebase/auth';
import TripMini from '../../Trip/TripMini/TripMini';
import { toast } from 'react-hot-toast';
import { firebaseErrors } from '../../../utils/firebaseErrors';
import { Link, useNavigate } from 'react-router-dom';

const OwnedTrips = () => {
	const { currentUser } = getAuth();
	const [ownedTrips, setOwnedTrips] = useState([]);

	const filteredOwnedTripsCollectionRef = query(
		collection(db, 'Trips'),
		where('owner', '==', currentUser.uid)
	);

	const getOwnedTrips = async () => {
		try {
			const ownedTripsSnapshot = await getDocs(filteredOwnedTripsCollectionRef);
			const ownedTripsData = ownedTripsSnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setOwnedTrips(ownedTripsData);
		} catch (error) {
			toast.error('Wystąpił błąd: ' + firebaseErrors[error.code]);
		}
	};

	useEffect(() => {
		getOwnedTrips();
	}, []);

	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/addtrip');
	};

	return (
		<>
			<div className={styles.buttonBox}>
				<Link
					to='/mytrips/ownedtrips'
					className={`${styles.myTripsLink} ${styles.myTripsLinkActive}`}
				>
					Moje
				</Link>
				<Link to='/mytrips/joinedtrips' className={styles.myTripsLink}>
					Dołączone
				</Link>
			</div>
			<div className={styles.container}>
				<div className={styles.create_container}>
					<h3>Stwórz nową podróż</h3>
					<div className={styles.create_details_container}>
						<p className={styles.create_details}>
							Dokąd chcesz się wybrać? :) <br />
							Tapnij + aby dodać nową podróż.
						</p>
						<button onClick={handleClick} className={styles.create_btn}>
							+
						</button>
					</div>
				</div>
				<ul className={styles.trip}>
					{ownedTrips
						? ownedTrips.map((trip) => (
								<TripMini key={trip.id} {...trip} filterOwnership={false} />
						  ))
						: null}
				</ul>
			</div>
		</>
	);
};

export default OwnedTrips;
