import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<Link to='/'>
				<div className={styles.link}>
					<img
						className={styles.icon}
						src='../../src/assets/icons/home-circle.svg'
						alt='Home inside a circle'
					/>
					<span>Home</span>
				</div>
			</Link>
			<Link to='/alltrips'>
				<div className={styles.link}>
					<img
						className={styles.icon}
						src='../../src/assets/icons/airplane.svg'
						alt='Airplane'
					/>
					<span>Podróżuj</span>
				</div>
			</Link>
			<Link to='/mytrips'>
				<div className={styles.link}>
					<img
						className={styles.icon}
						src='../../src/assets/icons/auto-mode.svg'
						alt='circle with arrow with cross inside'
					/>
					<span>Moje podróże</span>
				</div>
			</Link>
			<Link to='/userprofile'>
				<div className={styles.link}>
					<img
						className={styles.icon}
						src='../../src/assets/icons/account-circle.svg'
						alt='Profile icon inside circle'
					/>
					<span>Profil</span>
				</div>
			</Link>
		</div>
	);
};

export default Footer;
