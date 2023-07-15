import React, { useState } from 'react';
import styles from './Filters.module.css';
import countriesList from './countries.json';
import { Toaster, toast } from 'react-hot-toast';
import iconPlus from '/public/assets/icons/plus-solid.svg';
import iconMinus from '/public/assets/icons/minus-solid.svg';
import iconTrash from '/public/assets/icons/trash.svg';

const Filters = ({
	additionalFilters,
	setAdditionalFilters,
	topBudgetOfAllTrips,
}) => {
	const [showLocationFilters, setShowLocationFilters] = useState(false);
	const [showDatesFilters, setShowDatesFilters] = useState(false);
	const [showBudgetFilters, setShowBudgetFilters] = useState(false);
	const [selectedCountries, setSelectedCountries] = useState([]);

	const handleShowLocationFilters = () => {
		setShowLocationFilters(!showLocationFilters);
	};

	const handleShowDatesFilters = () => {
		setShowDatesFilters(!showDatesFilters);
	};

	const handleShowBudgetFilters = () => {
		setShowBudgetFilters(!showBudgetFilters);
	};

	const handleRemoveSelectedCountry = (e) => {
		e.preventDefault();

		const updateSelectedCountries = selectedCountries.filter((country) => {
			return country === e.currentTarget.id ? false : true;
		});

		setSelectedCountries(updateSelectedCountries);
	};

	const handleSetAdditionalFilters = (e) => {
		e.preventDefault();
		try {
			const newMinBudget = e.target.minBudget
				? e.target.minBudget.value === ''
					? additionalFilters.minBudget
					: parseInt(e.target.minBudget.value)
				: additionalFilters.minBudget;

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

			if ((newFromDate != '') & (newToDate != '') & (newFromDate > newToDate)) {
				throw new Error(
					'Data powrotu nie może być wcześniejsza niż data rozpoczęcia wycieczki'
				);
			}

			if ((newFromDate != '') & (newFromDate < new Date())) {
				console.log('error');
				throw new Error('Początek wycieczki nie może być w przeszłości');
			}

			setAdditionalFilters({
				countries: selectedCountries,
				minBudget: newMinBudget,
				maxBudget: newMaxBudget,
				fromDate: newFromDate,
				toDate: newToDate,
			});
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<>
			<Toaster />
			<form
				onSubmit={handleSetAdditionalFilters}
				className={styles.additionalFiltersContainer}
			>
				{/* countries filter */}
				<div className={styles.filtersGroupBox}>
					<div className={styles.filtersGroupTitle}>
						<h4>Lokalizacja</h4>
						<button
							className={styles.filtersGroupBtn}
							type='button'
							onClick={handleShowLocationFilters}
						>
							{showLocationFilters ? <img src={iconMinus} /> : <img src={iconPlus} />}
						</button>
					</div>
					{showLocationFilters && (
						<div className={styles.filtersCountriesGroup}>
							<div className={styles.selectBox}>
								<select
									className={styles.countiesSelect}
									onChange={(event) => {
										const newSelectedValue = event.target.value;
										if (!selectedCountries.includes(newSelectedValue)) {
											setSelectedCountries((previouslySelecetedCountries) => [
												...previouslySelecetedCountries,
												newSelectedValue,
											]);
										} else {
											toast('Ten kraj jest już zaznaczony');
										}
									}}
								>
									<option defaultValue=''></option>
									{countriesList.map((country) => {
										return (
											<option key={country} value={country}>
												{country}
											</option>
										);
									})}
								</select>
							</div>
							<ul className={styles.selectedCountiesList}>
								{selectedCountries.map((selectedCountry) => (
									<li
										key={selectedCountry}
										id={selectedCountry}
										onClick={handleRemoveSelectedCountry}
									>
										{selectedCountry}{' '}
										<button type='button' className={styles.removeSelectedCountry}>
											<img src={iconTrash} alt='Usuń wybranyn kraj' />
										</button>
									</li>
								))}
							</ul>
						</div>
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
							{showBudgetFilters ? <img src={iconMinus} /> : <img src={iconPlus} />}
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
									onWheel={(e) => e.target.blur()}
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
									onWheel={(e) => e.target.blur()}
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
							{showDatesFilters ? <img src={iconMinus} /> : <img src={iconPlus} />}
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
		</>
	);
};

export default Filters;
