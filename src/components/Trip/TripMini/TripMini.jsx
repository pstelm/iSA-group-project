import React, { useEffect, useState } from 'react';
import styles from './TripMini.module.css';
import { getUserData } from '../../../utils/getUserData';
import { Link } from 'react-router-dom';
import useAuth from '../../../contexts/AuthContext';
import { getTripDuration } from '../../../utils/getTripDuration';
import { getDownloadURL, getStorage, ref } from '@firebase/storage';

const TripMini = ({
	id,
	title,
	startDate,
	endDate,
	endPlace,
	owner,
	maxParticipantsCount,
	filterOwnership,
}) => {
	// const [tripOwner, setTripOwner] = useState();
	const { currentUser } = useAuth();
	const storage = getStorage();
	const [tripImgURL, setTripImgURL] = useState();
	const [tripDuration, setTripDuration] = useState('');

	const getTripDuration = () => {
		let tripDurationText = '';
		const startDay = startDate.toDate().getDate();
		const startMonth = startDate.toDate().getMonth() + 1;
		const startYear = endDate.toDate().getFullYear();

		const endDay = endDate.toDate().getDate();
		const endMonth = endDate.toDate().getMonth() + 1;
		const endYear = endDate.toDate().getFullYear();

		if (startYear === endYear && startMonth === endMonth) {
			tripDurationText = startDay + '-' + endDay + '.' + endMonth + '.' + endYear;
		} else if (startYear === endYear) {
			tripDurationText =
				startDay + '.' + startMonth + '-' + endDay + '.' + endMonth + '.' + endYear;
		} else {
			tripDurationText =
				startDay +
				'.' +
				startMonth +
				'.' +
				startYear +
				'-' +
				endDay +
				'.' +
				endMonth +
				'.' +
				endYear;
		}
		setTripDuration(tripDurationText);
	};

	const getTripImage = async () => {
		const imgPathReference = ref(storage, `tripsPhoto/${id}.jpg`);
		getDownloadURL(imgPathReference)
			.then((url) => {
				setTripImgURL(url);
			})
			.catch((error) => {
				if (error.code !== 'storage/object-not-found') {
					// setTripImgURL()
					console.log(error.message);
				}
			});
	};

	useEffect(() => {
		// getUserData(owner, setTripOwner);
		getTripImage();
		getTripDuration();
	}, []);

	return (
		<>
			<li className={styles.tripBox}>
				<Link
					to={`/trip/${id}`}
					className={
						filterOwnership === true && owner === currentUser.uid
							? styles.tripLinkOwned
							: styles.tripLink
					}
				>
					<div className={styles.tripImgBox}>
						{tripImgURL ? (
							<img
								src={tripImgURL}
								alt={`Zdjęcie podróży ${title}`}
								className={styles.tripImg}
							/>
						) : (
							<img
								src='/assets/default.png'
								// src='/assets/logo_transparent.png'
								alt={`Zdjęcie podróży ${title}`}
								className={styles.defaultTripImg}
							/>
						)}
					</div>
					<h4 className={styles.title}>{title}</h4>
					<div className={styles.oneLine}>
						<img
							className={styles.icon}
							src={
								filterOwnership === true && owner === currentUser.uid
									? '/assets/icons/location-dot-grey.svg'
									: '/assets/icons/location-dot-solid.svg'
							}
							alt=''
						/>
						<p>{endPlace}</p>
					</div>
					<div className={styles.oneLine}>
						<img
							className={styles.icon}
							src={
								filterOwnership === true && owner === currentUser.uid
									? '/assets/icons/calendar-days-grey.svg'
									: '/assets/icons/calendar-days-regular.svg'
							}
							alt=''
						/>
						<p>{tripDuration}</p>
					</div>
					{/* {tripOwner ? (
						<p>
							Owner: {tripOwner.firstName} {tripOwner.lastName}
						</p>
					) : null} */}
					<div className={styles.oneLine}>
						<img
							className={styles.icon}
							src={
								filterOwnership === true && owner === currentUser.uid
									? '/assets/icons/people-group-grey.svg'
									: '/assets/icons/people-group-solid.svg'
							}
							alt=''
						/>
						<p>max. {maxParticipantsCount ? maxParticipantsCount : '0'} osób</p>
					</div>
				</Link>
			</li>
		</>
	);
};

export default TripMini;
