import React, { useEffect, useState } from 'react';
import styles from './TripMini.module.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../contexts/AuthContext';
import { getDownloadURL, getStorage, ref } from '@firebase/storage';
import iconLocationDark from '/public/assets/icons/location-dot-solid.svg';
import iconLocationGrey from '/public/assets/icons/location-dot-grey.svg';
import iconCalendarDark from '/public/assets/icons/calendar-days-regular.svg';
import iconCalendarGrey from '/public/assets/icons/calendar-days-grey.svg';
import iconGroupDark from '/public/assets/icons/people-group-solid.svg';
import iconGroupGrey from '/public/assets/icons/people-group-grey.svg';

const TripMini = ({
	id,
	title,
	startDate,
	endDate,
	toCountry,
	owner,
	maxParticipantsCount,
	filterOwnership,
}) => {
	// const [tripOwner, setTripOwner] = useState();
	const { currentUser } = useAuth();
	const storage = getStorage();
	const [tripImgURL, setTripImgURL] = useState();
	const [tripDuration, setTripDuration] = useState('');
	const defaultImgURL =
		'https://firebasestorage.googleapis.com/v0/b/promises-land.appspot.com/o/tripsPhoto%2Fdefault.png?alt=media&token=179f10ed-72cc-40a8-bef4-2a76ba77f98f';
	let iconLocation = iconLocationDark;
	let iconCalendar = iconCalendarDark;
	let iconGroup = iconGroupDark;

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
				// if (error.code !== 'storage/object-not-found') {
				// 	// setTripImgURL()
				console.log(error.message);
				// }
			});
	};

	if (filterOwnership === true && owner === currentUser.uid) {
		iconLocation = iconLocationGrey;
		iconCalendar = iconCalendarGrey;
		iconGroup = iconGroupGrey;
	}

	useEffect(() => {
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
								src={defaultImgURL}
								alt={`Przykładowe zdjęcie podróży`}
								className={styles.defaultTripImg}
							/>
						)}
					</div>
					<h4 className={styles.title}>{title}</h4>
					<div className={styles.oneLine}>
						<img className={styles.icon} src={iconLocation} alt='Kraj' />
						<p>{toCountry}</p>
					</div>
					<div className={styles.oneLine}>
						<img className={styles.icon} src={iconCalendar} alt='' />
						<p>{tripDuration}</p>
					</div>
					<div className={styles.oneLine}>
						<img className={styles.icon} src={iconGroup} alt='' />
						<p>{maxParticipantsCount ? maxParticipantsCount : '0'} podróżników</p>
					</div>
				</Link>
			</li>
		</>
	);
};

export default TripMini;
