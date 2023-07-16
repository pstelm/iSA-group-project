import useAuth from '../../../contexts/AuthContext';
import { db } from '../../../config/firebase';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	where,
} from '@firebase/firestore';
import { useEffect, useState } from 'react';
import styles from './userprofile.module.css';
import {
	getStorage,
	ref,
	getDownloadURL,
	uploadBytes,
} from '@firebase/storage';
import { toast } from 'react-hot-toast';
import BackButton from '../../BackButton/BackButton';
import { Link } from 'react-router-dom';
import { firebaseErrors } from '../../../utils/firebaseErrors';
import iconPlus from '/public/assets/icons/plus-solid.svg';
import iconLocation from '/public/assets/icons/location-dot-solid.svg';
import iconAirplane from '/public/assets/icons/airplane-dark.svg';

const UserProfile = () => {
	const storage = getStorage();
	const { currentUser } = useAuth();
	const [user, setUser] = useState();
	const [userProfileImgURL, setUserProfileImgURL] = useState();
	const [age, setAge] = useState();
	const [myTrips, setMyTrips] = useState([]);
	const defatultProfileIMG =
		'https://firebasestorage.googleapis.com/v0/b/promises-land.appspot.com/o/usersProfilePhoto%2Fdefault-user-image.svg?alt=media&token=51cfbe1c-fb80-4d7f-bc54-cd59b95361aa';

	const getUserData = async () => {
		const userRef = await doc(db, 'Users', currentUser.uid);
		await getDoc(userRef).then((userSnapshot) => {
			setUser({
				id: currentUser.uid,
				...userSnapshot.data(),
			});

			const pathReference = ref(
				storage,
				`usersProfilePhoto/${currentUser.uid}.jpg`
			);
			getDownloadURL(pathReference)
				.then((url) => {
					setUserProfileImgURL(url);
				})
				.catch((error) => {
					if (error.code !== 'storage/object-not-found') {
						toast.error('Wystąpił błąd: ' + error.message);
					}
				});

			const today = new Date();
			const birthDate = userSnapshot.data().birthDate.toDate();
			const ageNow = today.getFullYear() - birthDate.getFullYear();
			setAge(ageNow);
		});
	};

	const filteredOwnedTripsCollectionRef = query(
		collection(db, 'Trips'),
		where('owner', '==', currentUser.uid)
	);

	const getOwnedTrips = async () => {
		try {
			const ownedTripsSnapshot = await getDocs(filteredOwnedTripsCollectionRef);
			const ownedTripsData = ownedTripsSnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));

			setMyTrips(ownedTripsData);
		} catch (error) {
			toast.error('Wystąpił błąd: ' + firebaseErrors[error.code]);
		}
	};

	const handleEditAvatar = (e) => {
		const file = e.target.files[0];
		if (file) {
			try {
				const pathReference = ref(
					storage,
					`usersProfilePhoto/${currentUser.uid}.jpg`
				);
				uploadBytes(pathReference, file).then(() => {
					getUserData();
					toast.success('Zdjęcie profilowe zostało zmienione');
				});
			} catch (error) {
				toast.error('Wystąpił błąd: ' + error.message);
			}
		}
	};

	useEffect(() => {
		if (currentUser) {
			getUserData();
			getOwnedTrips();
		}
	}, [currentUser]);

	return (
		<>
			{user ? (
				<div className={styles.container}>
					<BackButton sectionTitle={'Profil użytkownika'} />

					<Link to='/editprofile' className={styles.link_edit_bottom}>
						Edytuj profil
					</Link>

					<div className={styles.user_profile_content}>
						<div className={styles.user_photo_box}>
							{userProfileImgURL ? (
								<img
									src={userProfileImgURL}
									alt='user profile'
									id='userProfilePhoto'
									className={styles.user_photo}
								/>
							) : (
								<img
									src={defatultProfileIMG}
									alt='empty user profile'
									id='emptyUserProfilePhoto'
									className={styles.user_photo}
								/>
							)}

							<label onChange={handleEditAvatar} htmlFor='editAvatarInput'>
								<input
									type='file'
									id='editAvatarInput'
									className={styles.edit_avatar_input}
									accept='.jpg'
									multiple={false}
									hidden
								/>
								<img src={iconPlus} className={styles.icon_edit_photo} />
							</label>
						</div>

						<div className={styles.user_data_box}>
							<h2>
								{user.firstName} {user.lastName}, {age} l.
							</h2>
							{user.city ? (
								<div className={styles.user_city_content}>
									<img src={iconLocation} className={styles.icon_city} />
									<p>{user.city}, Polska</p>
								</div>
							) : (
								<p className={styles.user_city_info}>Uzupełnij swoją lokalizację</p>
							)}
						</div>

						<div className={styles.user_about_box}>
							<h4 className={styles.section_title}>O mnie</h4>
							<p>{user.aboutMe}</p>
						</div>

						<div className={styles.user_about_box}>
							<h4 className={styles.section_title}>Moje podróże</h4>
							<ul className={styles.my_trips_list}>
								{myTrips && myTrips.length > 0 ? (
									myTrips.map((trip) => (
										<li key={trip.id}>
											<Link to={`/trip/${trip.id}`} className={styles.my_trips_link}>
												<img
													src={iconAirplane}
													alt=''
													className={styles.my_trips_link_icon}
												/>
												<p>{trip.title}</p>
											</Link>
										</li>
									))
								) : (
									<p className={styles.user_trips_info}>Brak podróży</p>
								)}
							</ul>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};
export default UserProfile;
