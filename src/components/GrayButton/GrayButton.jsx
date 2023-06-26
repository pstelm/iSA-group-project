import React from 'react';
import styles from './GrayButton.module.css';

const GrayButton = ({ btnText, type }) => {
	return (
		<button type={type} className={styles.GrayButton}>
			{btnText}
		</button>
	);
};

export default GrayButton;
