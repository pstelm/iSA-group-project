import React, { useState } from 'react';
import styles from './Filters.module.css';

const Filters = ({ additionalFilters, setAdditionalFilters }) => {
	const [showLocationFilters, setShowLocationFilters] = useState(false);
	const [showDatesFilters, setShowDatesFilters] = useState(false);
	const [showBudgetFilters, setShowBudgetFilters] = useState(false);

	const handleShowLocationFilters = () => {
		setShowLocationFilters(!showLocationFilters);
	};

	const handleShowDatesFilters = () => {
		setShowDatesFilters(!showDatesFilters);
	};

	const handleShowBudgetFilters = () => {
		setShowBudgetFilters(!showBudgetFilters);
	};

	// console.log(additionalFilters);

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
					<div className={styles.filtersGroup}>
						{/* <div className={styles.filtersLine}></div> */}
						<label htmlFor='minBudget'>Od: </label>
						<div className={styles.inputBox}>
							<input
								name='minBudget'
								type='number'
								defaultValue={additionalFilters.minBudget}
								// placeholder='0'
							/>
							<p className={styles.inputBoxInfo}>zł</p>
						</div>
						<label htmlFor='minBudget'>Do: </label>
						<div className={styles.inputBox}>
							<input
								name='minBudget'
								type='number'
								defaultValue={additionalFilters.maxBudget}
							/>
							<p className={styles.inputBoxInfo}>zł</p>
						</div>
					</div>
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
			<button className={styles.confirmBtn} type='button'>
				Zatwierdź
			</button>
		</div>
	);
};

export default Filters;
