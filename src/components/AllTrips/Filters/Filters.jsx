import React, { useState } from 'react';
import styles from './Filters.module.css';

const Filters = () => {
	const [showLocationFilters, setShowLocationFilters] = useState(false);
	const [showDatesFilters, setShowDatesFilters] = useState(false);
	const [showBudgetFilters, setShowBudgetFilters] = useState(false);

	const handleShowLocationFilters = () => {
		showLocationFilters === false
			? setShowLocationFilters(true)
			: setShowLocationFilters(false);
	};

	const handleShowDatesFilters = () => {
		showDatesFilters === false
			? setShowDatesFilters(true)
			: setShowDatesFilters(false);
	};

	const handleShowBudgetFilters = () => {
		showBudgetFilters === false
			? setShowBudgetFilters(true)
			: setShowBudgetFilters(false);
	};

	return (
		<div className={styles.additionalFiltersContainer}>
			<div className={styles.filtersGroupBox}>
				<div className={styles.filtersGroupTitle}>
					<h4>Lokalizacja</h4>
					<button
						className={styles.filtersGroupBtn}
						type='button'
						onClick={handleShowLocationFilters}
					>
						{showLocationFilters ? (
							<img src='/src/assets/icons/minus-solid.svg' />
						) : (
							<img src='/src/assets/icons/plus-solid.svg' />
						)}
					</button>
				</div>
				{showLocationFilters && (
					<div className={styles.filtersGroup}>FILTR LOKALIZACJI</div>
				)}
			</div>
			<div className={styles.filtersGroupBox}>
				<div className={styles.filtersGroupTitle}>
					<h4>Budżet</h4>
					<button
						className={styles.filtersGroupBtn}
						type='button'
						onClick={handleShowBudgetFilters}
					>
						{showBudgetFilters ? (
							<img src='/src/assets/icons/minus-solid.svg' />
						) : (
							<img src='/src/assets/icons/plus-solid.svg' />
						)}
					</button>
				</div>
				{showBudgetFilters && (
					<div className={styles.filtersGroup}>FILTR BUDŻETU</div>
				)}
			</div>
			<div className={styles.filtersGroupBox}>
				<div className={styles.filtersGroupTitle}>
					<h4>Daty</h4>
					<button
						className={styles.filtersGroupBtn}
						type='button'
						onClick={handleShowDatesFilters}
					>
						{showDatesFilters ? (
							<img src='/src/assets/icons/minus-solid.svg' />
						) : (
							<img src='/src/assets/icons/plus-solid.svg' />
						)}
					</button>
				</div>
				{showDatesFilters && <div className={styles.filtersGroup}>FILTR DAT</div>}
			</div>
			{/* <button className={styles.confirmBtn} type='button'>
				Zatwierdź
			</button> */}
		</div>
	);
};

export default Filters;
