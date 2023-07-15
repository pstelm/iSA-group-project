import React from 'react';
import styles from './Navbar.module.css';
import useAuth from '../../contexts/AuthContext';
import logo from '/public/assets/logo_transparent.png';

const Navbar = () => {
	const { logout } = useAuth();

	return (
		<div className={styles.navbar}>
			<div className={styles.navLogo}>
				<img src={logo} alt='Logo CoTravel' />
				<h1 className={styles.name}>CoTravel</h1>
			</div>

			<button className={styles.logoutBtn} onClick={logout} type='button'>
				Wyloguj się
			</button>
		</div>
	);
};

export default Navbar;
