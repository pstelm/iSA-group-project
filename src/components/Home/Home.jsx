import useAuth from '../../contexts/AuthContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { getUserData } from '../../utils/getUserData';

const Home = () => {
	const { currentUser } = useAuth();
	const [user, setUser] = useState();

	useEffect(() => {
		if (currentUser) {
			getUserData(currentUser.uid, setUser);
		}
	}, [currentUser]);

	return (
		<>
			{user ? (
				<div className={styles.container}>
					<div className={styles.greetingBox}>
						<h2 className={styles.greeting}>
							<span>Witaj,</span>
							<br />
							{user.firstName} {user.lastName}!
						</h2>
					</div>

					<div className={styles.honeycomb}>
						<div className={styles.ibwsfix}>
							<div className={styles.hexagon}>
								<div className={styles.hexagontent}>
									<Link to='/userprofile' className={styles.linkshx}>
										Mój <br /> profil
										<img src='../../src/assets/icons/account-circle-dark.svg' />
									</Link>
								</div>
							</div>
							<div className={styles.hexagon}>
								<div className={styles.hexagontent}>
									<Link to='/mytrips/joinedtrips' className={styles.linkshx}>
										Dołączone podróże
										<img src='../../src/assets/icons/auto-mode-dark.svg' />
									</Link>
								</div>
							</div>
							<div className={styles.hexagon}>
								<div className={styles.hexagontent}>
									<Link to='/addtrip' className={styles.linkshx}>
										Stwórz <br /> podróż
										<img src='../../src/assets/icons/airplane-dark.svg' />
									</Link>
								</div>
							</div>
							<div className={styles.hexagon}>
								<div className={styles.hexagontent}>
									<Link to='/alltrips' className={styles.linkshx}>
										Szukaj <br /> podróży
										<img src='../../src/assets/icons/search-airplane.svg' />
									</Link>
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
