import { Navbar, Footer } from '../index';
import { Outlet } from 'react-router';
import styles from './Layout.module.css';
import useAuth from '../../contexts/AuthContext';

const Layout = () => {
	const { currentUser } = useAuth();

	return (
		<div className={styles.layout}>
			<div className={styles.navbar}>
				<Navbar />
			</div>
			<div className={styles.page_content}>
				<Outlet />
			</div>
			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
