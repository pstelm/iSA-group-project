import React from 'react';
import styles from './UserProfile.module.css';
import BackButton from '../BackButton/BackButton';

const UserProfile = () => {
	return (
		<div className={styles.titleBox}>
			<BackButton />
			<h3>Profil użytkownika</h3>
		</div>
	);
};

export default UserProfile;
