import { Navbar, Footer } from '../index';
import { Outlet } from 'react-router';
import styles from './Layout.module.css';
import useAuth from '../../contexts/AuthContext';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
	const { currentUser } = useAuth();

	if (currentUser) {
		console.log(currentUser.uid);
	}

	// const getUserData = async () => {
	// 	const userRef = doc(db, 'Users', currentUser.uid);
	// 	console.log('UserRef: ' + userRef);

	// 	try {
	// 		const userData = await getDoc(userRef);
	// 		console.log('UserData: ' + userData);
	// 	} catch (error) {
	// 		console.error();
	// 	}
	// };

	// getUserData();

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
