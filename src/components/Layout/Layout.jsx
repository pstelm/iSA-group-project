import { Navbar, Footer } from '../index';
import { Outlet } from 'react-router';
import styles from './Layout.module.css';
import useAuth from '../../contexts/AuthContext';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
	const { currentUser } = useAuth();

	return (
		<div className={styles.layout}>
			{currentUser ? (
				<div className={styles.navbar}>
					<Navbar />
				</div>
			) : null}
			<div className={styles.page_content}>
				<Toaster />
				<Outlet />
			</div>
			{currentUser ? (
				<div className={styles.footer}>
					<Footer />
				</div>
			) : null}
		</div>
	);
};

export default Layout;
