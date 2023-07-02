import React from 'react';
import styles from './Navbar.module.css';
import useAuth from '../../contexts/AuthContext';

const Navbar = () => {
	const { logout } = useAuth();

	return (
		<div className={styles.navbar}>
			<div className={styles.navLogo}>
				<img src='../../src/assets/logo_transparent.png' alt='Logo CoTravel' />
				<h1 className={styles.name}>CoTravel</h1>
			</div>
			{/* <button className={styles.hamburgerBtn} type="button">
				<div className={styles.hamburgerBtnBox}>
					<span className={styles.hamburgerBtnLine}>MENU</span>
				</div>
			</button> */}
			<button className={styles.logoutBtn} onClick={logout} type='button'>
				Wyloguj się
			</button>

			{/* <nav className={styles.nav}></nav> */}
		</div>
	);
};

export default Navbar;
