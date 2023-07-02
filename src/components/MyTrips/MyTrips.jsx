import React from 'react';
import styles from './MyTrips.module.css';
import { Outlet } from 'react-router-dom';

const MyTrips = () => {
	return (
		<div className={styles.container}>
			<h4>Moje podróże</h4>
			<Outlet />
		</div>
	);
};

export default MyTrips;
