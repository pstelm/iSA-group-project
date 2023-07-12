import React, { useState } from 'react';
import styles from './Filters.module.css';
import { toast } from 'react-hot-toast';

const Filters = ({
	additionalFilters,
	setAdditionalFilters,
	topBudgetOfAllTrips,
}) => {
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

	const handleSetAdditionalFilters = (e) => {
		e.preventDefault();
		try {
			const newMinBudget = e.target.minBudget
				? e.target.minBudget.value === ''
					? additionalFilters.minBudget
					: parseInt(e.target.minBudget.value)
				: additionalFilters.minBudget;

			// To powyżej to skrócone to poniżej. Musiałam dodać sprawdzanie, czy pola w ogóle są widoczne na stronie, przez akcje an pomarańczowym plusie
			// let newMinBudget = '';
			// if (e.target.minBudget) {
			// 	newMinBudget =
			// 		e.target.minBudget.value === ''
			// 			? additionalFilters.minBudget
			// 			: parseInt(e.target.minBudget.value);
			// } else {
			// 	newMinBudget = additionalFilters.minBudget;
			// }

			const newMaxBudget = e.target.maxBudget
				? e.target.maxBudget.value === ''
					? topBudgetOfAllTrips
					: parseInt(e.target.maxBudget.value)
				: topBudgetOfAllTrips;

			const newFromDate = e.target.fromDate
				? e.target.fromDate.value === ''
					? ''
					: new Date(e.target.fromDate.value)
				: '';

			const newToDate = e.target.toDate
				? e.target.toDate.value === ''
					? ''
					: new Date(e.target.toDate.value)
				: '';

			// if (startDate > endDate) {
			// 	throw new Error('Data powrotu nie może być wcześniejsza niż data wylotu');
			// }

			// if (startDate < new Date()) {
			// 	throw new Error('Data wylotu nie może być w przeszłości');
			// }

			setAdditionalFilters({
				countries: [],
				minBudget: newMinBudget,
				maxBudget: newMaxBudget,
				fromDate: newFromDate,
				toDate: newToDate,
			});
		} catch (error) {
			console.error();
		}
	};

	return (
		<form
			onSubmit={handleSetAdditionalFilters}
			className={styles.additionalFiltersContainer}
		>
			{/* countires filter */}
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
			{/* budget filter */}
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
						<label htmlFor='minBudget'>Od: </label>
						<div className={styles.inputBox}>
							<input
								name='minBudget'
								type='number'
								placeholder={additionalFilters.minBudget}
								className={styles.budgetInput}
							/>
							<p className={styles.inputBoxInfo}>zł</p>
						</div>
						<label htmlFor='maxBudget'>Do: </label>
						<div className={styles.inputBox}>
							<input
								name='maxBudget'
								type='number'
								placeholder={additionalFilters.maxBudget}
								className={styles.budgetInput}
							/>
							<p className={styles.inputBoxInfo}>zł</p>
						</div>
					</div>
				)}
			</div>
			{/* dates filter */}
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
				{showDatesFilters && (
					<div className={styles.filtersGroup}>
						<label htmlFor='fromDate'>Od: </label>
						<div className={styles.inputBox}>
							<input name='fromDate' type='date' className={styles.dateInput} />
						</div>
						<label htmlFor='toDate'>Do: </label>
						<div className={styles.inputBox}>
							<input name='toDate' type='date' className={styles.dateInput} />
						</div>
					</div>
				)}
			</div>
			<button className={styles.confirmBtn}>Zatwierdź</button>
		</form>
	);
};

export default Filters;
