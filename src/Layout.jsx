import React from 'react';
import styles from './Layout.module.css';
import { Footer, Home, Navbar, MyTrips } from './components';
import { Route, Routes } from 'react-router-dom';

const Layout = () => {
	return (
		<div className={styles.layout}>
			<div className={styles.navbar}>
				<Navbar />
			</div>
			<div className={styles.page_content}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/mytrips" element={<MyTrips />} />
				</Routes>
			</div>
			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
