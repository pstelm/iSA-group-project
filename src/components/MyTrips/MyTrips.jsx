import React from 'react';
import styles from './MyTrips.module.css';
import { Outlet } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';

const MyTrips = () => {
	return (
		<div className={styles.container}>
			<BackButton sectionTitle={'Moje podróże'} />
			<Outlet />
		</div>
	);
};

export default MyTrips;
