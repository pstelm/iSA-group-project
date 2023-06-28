import useAuth from '../../contexts/AuthContext';
import { db } from '../../config/firebase';
import { doc, getDoc } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
	const { currentUser } = useAuth();
	const [user, setUser] = useState();

	const getUserData = async () => {
		const userRef = await doc(db, 'Users', currentUser.uid);
		await getDoc(userRef).then((userSnapshot) => {
			setUser({
				id: currentUser.uid,
				...userSnapshot.data(),
			});
		});
	};

	useEffect(() => {
		if (currentUser) {
			// console.log(currentUser.uid);
			getUserData();
		}
	}, [currentUser]);

	// console.log('User:', user);

	return (
		<>
			{user ? (
				<div>
					<div>
						<h2>
							Witaj {user.firstName} {user.lastName}!
						</h2>

						<div className={styles.honeycomb}>
							<div className={styles.ibwsfix}>
								<div className={styles.hexagon}>
									<div className={styles.hexagontent}>
										<Link to='/userprofile' className={styles.linkshx}>Mój profil</Link>
									</div>
								</div>
								<div className={styles.hexagon}>
									<div className={styles.hexagontent}>
										<Link to='/mytrips' className={styles.linkshx}>Moje podróże</Link>
									</div>
								</div>
								<div className={styles.hexagon}>
									<div className={styles.hexagontent}>
										<Link to='/addtrip' className={styles.linkshx}>Stwórz podróż</Link>
									</div>
								</div>
								<div className={styles.hexagon}>
									<div className={styles.hexagontent}>
										<Link to='/alltrips' className={styles.linkshx}>Szukaj podróży</Link>
									</div>
								</div>
								<div className={styles.ibwsfix}>
									<div className={styles.hexagon}>
										<div className={styles.hexagontent}>
											TEST MOŻNA DODAĆ COŚ INNEGO 1
										</div>
									</div>
									<div className={styles.hexagon}>
										<div className={styles.hexagontent}>
											TEST MOŻNA DODAĆ COŚ INNEGO 2
										</div>
									</div>
									<div className={styles.hexagon}>
										<div className={styles.hexagontent}>
											TEST MOŻNA DODAĆ COŚ INNEGO 3
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Home;
