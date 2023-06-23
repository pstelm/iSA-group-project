import React from 'react';
import styles from './Layout.module.css';

const Layout = () => {
	return (
		<div className={styles.layout}>
			<div className={styles.navbar}>Navbar (logo + menu button)</div>
			<div className={styles.page_content}>
				<h1>Main section</h1>
			</div>
			<div className={styles.footer}>Footer (secondary navigation?)</div>
		</div>
	);
};

export default Layout;
