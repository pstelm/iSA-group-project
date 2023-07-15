import React from 'react';
import styles from './Footer.module.css';
import { Link, useLocation } from 'react-router-dom';
import iconHomeDark from '/public/assets/icons/home-circle-dark.svg';
import iconHomeLight from '/public/assets/icons/home-circle-light.svg';
import iconAllTripsDark from '/public/assets/icons/airplane-dark.svg';
import iconAllTripsLight from '/public/assets/icons/airplane-light.svg';
import iconJoinedTripsDark from '/public/assets/icons/auto-mode-dark.svg';
import iconJoinedTripsLight from '/public/assets/icons/auto-mode-light.svg';
import iconUserProfileDark from '/public/assets/icons/account-circle-dark.svg';
import iconUserProfileLight from '/public/assets/icons/account-circle-light.svg';

const Footer = () => {
	const { pathname } = useLocation();

	return (
		<div className={styles.footer}>
			<Link className={pathname === '/' ? styles.active : ''} to='/'>
				<div className={styles.link}>
					<img
						className={styles.icon}
						src={pathname === '/' ? { iconHomeLight } : { iconHomeDark }}
						alt='Ikona skrótu do Home'
					/>
					<span>Home</span>
				</div>
			</Link>
			<Link
				className={pathname === '/alltrips' ? styles.active : ''}
				to='/alltrips'
			>
				<div className={styles.link}>
					<img
						className={styles.icon}
						src={
							pathname === '/alltrips' ? { iconAllTripsLight } : { iconAllTripsDark }
						}
						alt='Ikona skrótu do Podróżuj'
					/>

					<span>Podróżuj</span>
				</div>
			</Link>
			<Link
				className={
					pathname === '/mytrips/ownedtrips' || pathname === '/mytrips/joinedtrips'
						? styles.active
						: ''
				}
				to='/mytrips/ownedtrips'
			>
				<div className={styles.link}>
					<img
						className={styles.icon}
						src={
							pathname === '/mytrips/ownedtrips' || pathname === '/mytrips/joinedtrips'
								? { iconJoinedTripsLight }
								: { iconJoinedTripsDark }
						}
						alt='Ikona skrótu do Moje Podróże'
					/>
					<span>Moje podróże</span>
				</div>
			</Link>
			<Link
				className={pathname === '/userprofile' ? styles.active : null}
				to='/userprofile'
			>
				<div className={styles.link}>
					<img
						className={styles.icon}
						src={
							pathname === '/userprofile'
								? { iconUserProfileLight }
								: { iconUserProfileDark }
						}
						alt='Ikona skrótu do Profil'
					/>
					<span>Profil</span>
				</div>
			</Link>
		</div>
	);
};

export default Footer;
