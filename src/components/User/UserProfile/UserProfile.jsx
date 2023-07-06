import useAuth from '../../../contexts/AuthContext';
import { db } from '../../../config/firebase';
import { doc, getDoc } from '@firebase/firestore';
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

const UserProfile = () => {
	const { currentUser } = useAuth();
	const [user, setUser] = useState();

	const [age, setAge] = useState();

	const storage = getStorage();
	const [userProfileImgURL, setUserProfileImgURL] = useState();

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
					toast.error('Wystąpił błąd: ' + error.message);
				});

			const today = new Date();
			const birthDate = userSnapshot.data().birthDate.toDate();
			const ageNow = today.getFullYear() - birthDate.getFullYear();
			setAge(ageNow);
		});
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
		}
	}, [currentUser]);

	return (
		<>
			{user ? (
				<div className={styles.user_profile_container}>
					<BackButton sectionTitle={'Profil użytkownika'} />
					<div className={styles.user_profile_content}>
						{/* Link do edycji danych użytkownika? */}
						<button type='button' className={styles.btn_edit}>
							<img
								src='../../src/assets/icons/pen.png'
								className={styles.icon_edit_profile}
							/>
						</button>
						{userProfileImgURL ? (
							<img
								src={userProfileImgURL}
								alt='user profile'
								id='userProfilePhoto'
								className={styles.user_photo}
							/>
						) : (
							<img
								src='../../src/assets/icons/empty-avatar.png'
								alt='empty user profile'
								id='emptyUserProfilePhoto'
								className={styles.user_photo}
							/>
						)}
						<div>
							<label onChange={handleEditAvatar} htmlFor='editAvatarInput'>
								<input
									type='file'
									id='editAvatarInput'
									className={styles.edit_avatar_input}
									accept='.jpg'
									multiple={false}
									hidden
								/>
								<img
									src='../../src/assets/icons/plus.png'
									className={styles.icon_edit_photo}
								/>
							</label>
						</div>
						<div className={styles.user_data_container}>
							{user.firstName} {user.lastName}, {age}
						</div>
						<div className={styles.user_city_content}>
							{/* wpisane na razie z palca "Poznań", normalnie dane powinny być z np user.city" */}
							<img
								src='../../src/assets/icons/location-dot-solid.svg'
								className={styles.icon_city}
							/>
							Poznań
							{/* {user.city} */}
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};
export default UserProfile;
