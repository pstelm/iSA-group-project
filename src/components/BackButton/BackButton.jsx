import React from 'react';
import styles from './BackButton.module.css';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
	const navigate = useNavigate();

	return (
		<button className={styles.buttonBox} onClick={() => navigate(-1)}>
			<img
				className={styles.buttonImg}
				src='../src/assets/icons/chevron-left-solid.svg'
				alt='Go back'
			/>
		</button>
	);
};

export default BackButton;
