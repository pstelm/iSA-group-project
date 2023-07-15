import React from 'react';
import styles from './BackButton.module.css';
import { useNavigate } from 'react-router-dom';
import iconBack from '/public/assets/icons/chevron-left-solid.svg';

const BackButton = ({ sectionTitle }) => {
	const navigate = useNavigate();

	return (
		<div className={styles.titleBox}>
			<button className={styles.buttonBox} onClick={() => navigate(-1)}>
				<img className={styles.buttonImg} src={iconBack} alt='Go back' />
			</button>
			<h3>{sectionTitle}</h3>
		</div>
	);
};

export default BackButton;
