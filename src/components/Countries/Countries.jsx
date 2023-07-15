import React from 'react';
import styles from './Countries.module.css';

const Countries = ({ countriesData, selectedCountry, setSelectedCountry }) => {
	return (
		<div>
			<select
				className={styles.country_list}
				onChange={(e) => setSelectedCountry(e.target.value)}
				required
				defaultValue={selectedCountry}
			>
				<option value='' hidden>
					Wybierz kraj
				</option>
				{countriesData.map((country) => {
					return (
						<option key={country} value={country}>
							{country}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Countries;
