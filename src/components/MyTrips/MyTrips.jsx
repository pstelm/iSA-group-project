import React from 'react';
import styles from './MyTrips.module.css';
import { Outlet } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';

const MyTrips = () => {
	return (
		<div className={styles.container}>
			<div className={styles.titleBox}>
				<BackButton />
				<h3>Moje podróże</h3>
			</div>
			<Outlet />
		</div>
	);
};

export default MyTrips;
