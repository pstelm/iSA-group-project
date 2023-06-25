import React from 'react';
import styles from './Navbar.module.css';
import useAuth from '../../contexts/AuthContext';

const Navbar = () => {
	const { logout } = useAuth();

	return (
		<div className={styles.navbar}>
			<div className={styles.navLogo}>
				<img src="../../src/assets/logo.png" alt="Logo CoTravel" />
				<h1>CoTravel</h1>
			</div>

			<button className={styles.logoutBtn} onClick={logout} type="button">
				Wyloguj się
			</button>
		</div>
	);
};

export default Navbar;
