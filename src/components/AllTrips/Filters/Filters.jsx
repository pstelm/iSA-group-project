import React, { useState } from 'react';
import styles from './Filters.module.css';

const Filters = () => {
	const [showLocationFilters, setShowLocationFilters] = useState(false);
	const [showDatesFilters, setShowDatesFilters] = useState(false);
	const [showBudgetFilters, setShowBudgetFilters] = useState(false);

	return (
		<div className={styles.additionalFiltersContainer}>
			<div className={styles.filtersGroupBox}>
				<div className={styles.filtersGroupTitle}>
					<h4>Lokalizacja</h4>
					<button className={styles.filtersGroupBtn} type='button'>
						+
					</button>
				</div>
				<div className={styles.filtersGroup}>{/* <input type='dropdown' /> */}</div>
			</div>
			<div className={styles.filtersGroupBox}>
				<div className={styles.filtersGroupTitle}>
					<h4>Budżet</h4>
					<button className={styles.filtersGroupBtn} type='button'>
						+
					</button>
				</div>
				<div className={styles.filtersGroup}>{/* <input type='dropdown' /> */}</div>
			</div>
			<div className={styles.filtersGroupBox}>
				<div className={styles.filtersGroupTitle}>
					<h4>Daty</h4>
					<button className={styles.filtersGroupBtn} type='button'>
						+
					</button>
				</div>
				<div className={styles.filtersGroup}>{/* <input type='dropdown' /> */}</div>
			</div>
			{/* <button className={styles.confirmBtn} type='button'>
				Zatwierdź
			</button> */}
		</div>
	);
};

export default Filters;
