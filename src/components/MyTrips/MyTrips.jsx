import React from 'react';
import styles from './MyTrips.module.css';
import { Link, Outlet } from 'react-router-dom';

const MyTrips = () => {
	const OWNEDTRIPS = '/mytrips/ownedtrips';

	return (
		<div className={styles.container}>
			<h4>Moje podróże</h4>
			<div className={styles.buttonBox}>
				<Link
					to='ownedtrips'
					className={`${styles.myTripsLink} ${
						window.location.pathname === OWNEDTRIPS ? styles.myTripsLinkActive : ''
					}`}
				>
					Moje
				</Link>
				<Link to='joinedtrips' className={`${styles.myTripsLink} `}>
					Dołączone
				</Link>
			</div>
			<Outlet />
		</div>
	);
};

export default MyTrips;
