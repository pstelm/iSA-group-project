import useAuth from '../../contexts/AuthContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { getUserData } from '../../utils/getUserData';
import iconUserProfile from '/public/assets/icons/account-circle-dark.svg';
import iconJoinedTrips from '/public/assets/icons/auto-mode-dark.svg';
import iconAddTrip from '/public/assets/icons/airplane-dark.svg';
import iconSearchTrip from '/public/assets/icons/search-airplane.svg';

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
										<img src={iconUserProfile} />
									</Link>
								</div>
							</div>
							<div className={styles.hexagon}>
								<div className={styles.hexagontent}>
									<Link to='/mytrips/joinedtrips' className={styles.linkshx}>
										Dołączone podróże
										<img src={iconJoinedTrips} />
									</Link>
								</div>
							</div>
							<div className={styles.hexagon}>
								<div className={styles.hexagontent}>
									<Link to='/addtrip' className={styles.linkshx}>
										Stwórz <br /> podróż
										<img src={iconAddTrip} />
									</Link>
								</div>
							</div>
							<div className={styles.hexagon}>
								<div className={styles.hexagontent}>
									<Link to='/alltrips' className={styles.linkshx}>
										Szukaj <br /> podróży
										<img src={iconSearchTrip} />
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
