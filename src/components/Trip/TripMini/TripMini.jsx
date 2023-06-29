import React, { useEffect, useState } from 'react';
import styles from './TripMini.module.css';
import { getUserData } from '../../../utils/getUserData';

const TripMini = ({
	title,
	startDate,
	endDate,
	endPlace,
	info,
	owner,
	maxParticipantsCount,
	participants,
}) => {
	const [tripOwner, setTripOwner] = useState();

	useEffect(() => {
		getUserData(owner, setTripOwner);
		console.log(title, participants);
	}, []);

	return (
		<li className={styles.tripBox}>
			<h4>{title}</h4>
			<p>{endPlace}</p>
			<p>Początek: {startDate.toDate().toLocaleDateString()}</p>
			<p>Koniec: {endDate.toDate().toLocaleDateString()}</p>
			{tripOwner ? (
				<p>
					Owner: {tripOwner.firstName} {tripOwner.lastName}
				</p>
			) : null}
			<p>
				Wielkość grupy: {maxParticipantsCount ? maxParticipantsCount : '0'}{' '}
				podrózników
			</p>
		</li>
	);
};

export default TripMini;
