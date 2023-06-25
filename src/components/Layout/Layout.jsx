import { Navbar, Footer } from '../index';
import { Outlet } from 'react-router';
import styles from './Layout.module.css';
import useAuth from '../../contexts/AuthContext';
import { db } from '../../config/firebase';
import { doc, getDoc } from '@firebase/firestore';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';

const Layout = () => {
	const { currentUser } = useAuth();
	const [user, setUser] = useState();

	const getUserData = async () => {
		const userRef = await doc(db, 'Users', currentUser.uid);
		await getDoc(userRef).then((userSnapshot) => {
			console.log(userSnapshot.data());
			setUser({
				email: userSnapshot.email,
				...userSnapshot.data(),
			});
		});

		console.log(user);
		// if (userData.exists()) {
		// 	console.log('UserData: ' + userData.data());
		// } else {
		// 	console.log('No such document!');
		// }

		// try {

		// } catch (error) {
		// 	console.error();
		// }
	};

	useEffect(() => {
		if (currentUser) {
			console.log(currentUser.uid);
			getUserData();
		}
	}, []);

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
