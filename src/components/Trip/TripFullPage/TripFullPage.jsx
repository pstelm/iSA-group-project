import React from 'react';
import styles from './TripFullPage.module.css';
import { useParams } from 'react-router-dom';

const TripFullPage = () => {
	const { tripID } = useParams();

	return (
		<div>
			<h4>TripFullPage</h4>
			<p>TripID: {tripID}</p>
		</div>
	);
};

export default TripFullPage;
