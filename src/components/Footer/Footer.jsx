import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<Link className={`{pathname === '/' ? styles.active : ''}`} to='/mytrips'>
				<div className={styles.link}>
					<img
						className={styles.icon}
						src='../../src/assets/icons/home-circle-dark.svg'
						alt='Ikona skrótu do Home'
					/>
					<span>Home</span>
				</div>
			</Link>
			<Link
				className={`{pathname === '/alltrips' ? styles.active : ''}`}
				to='/mytrips'
			>
				<div className={styles.link}>
					<img
						className={styles.icon}
						src='../../src/assets/icons/airplane-dark.svg'
						alt='Ikona skrótu do Podróżuj'
					/>
					<span>Podróżuj</span>
				</div>
			</Link>
			<Link
				className={`{pathname === '/mytrips/ownedtrips' ? styles.active : ''}`}
				to='/mytrips/ownedtrips'
			>
				<div className={styles.link}>
					<img
						className={styles.icon}
						src='../../src/assets/icons/auto-mode-dark.svg'
						alt='Ikona skrótu do Moje Podróże'
					/>
					<span>Moje podróże</span>
				</div>
			</Link>
			<Link
				className={`{pathname === '/userprofile' ? styles.active : ''}`}
				to='/mytrips'
			>
				<div className={styles.link}>
					<img
						className={styles.icon}
						src='../../src/assets/icons/account-circle-dark.svg'
						alt='Ikona skrótu do Profil'
					/>
					<span>Profil</span>
				</div>
			</Link>
		</div>
	);
};

export default Footer;
