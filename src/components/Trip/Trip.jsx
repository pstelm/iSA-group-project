import React, { useEffect, useState } from 'react';
import styles from './Trip.module.css';
import { db } from '../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getUserData } from '../../utils/getUserData';

const Trip = ({
	title,
	startDate,
	endDate,
	endPlace,
	info,
	owner,
	participants,
}) => {
	const [tripOwner, setTripOwner] = useState();
	const [tripParticipants, setTripParticipants] = useState();
	const participantsArray = [];

	const getParticipants = () => {
		participants.forEach((part) => {
			getUserData(part, setTripParticipants);
			participantsArray.push(tripParticipants);
		});
		console.log(title, participantsArray);
	};

	useEffect(() => {
		getUserData(owner, setTripOwner);
		getParticipants();
		// console.log(tripOwner);
	}, []);

	return (
		<li className={styles.tripBox}>
			<h5>{title}</h5>
			<p>{endPlace}</p>
			<p>Początek: {startDate.toDate().toDateString()}</p>
			<p>Koniec: {endDate.toDate().toDateString()}</p>
			<p>Opis podróży: {info}</p>

			{tripOwner ? (
				<p>
					Owner: {tripOwner.firstName} {tripOwner.lastName}
				</p>
			) : null}

			<div>
				<ul>Uczestnicy: {participants.join(', ')}</ul>
			</div>
		</li>
	);
};

export default Trip;
