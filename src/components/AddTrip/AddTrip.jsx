import React from 'react';
import styles from './AddTrip.module.css';
import { db } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { parseTags } from '../../utils/validators';
import useAuth from '../../contexts/AuthContext';
import { toast } from 'react-hot-toast';

const AddTrip = () => {
	const tripsCollectionRef = collection(db, 'Trips');

	const { currentUser } = useAuth();

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const title = e.target.title.value;
			const info = e.target.info.value;
			const startDate = new Date(e.target.startDate.value);
			const endDate = new Date(e.target.endDate.value);
			const startPlace = e.target.startPlace.value;
			const endPlace = e.target.endPlace.value;
			const maxParticipantsCount = Number(e.target.maxParticipantsCount.value);
			const participants = [currentUser.uid];
			const budget = Number(e.target.budget.value);
			const tags = parseTags(e.target.tags.value);
			const owner = currentUser.uid;

			if (startDate > endDate) {
				throw new Error('Data powrotu nie może być wcześniejsza niż data wylotu');
			}

			if (startDate < new Date()) {
				throw new Error('Data wylotu nie może być w przeszłości');
			}

			if (maxParticipantsCount < 1) {
				throw new Error('Podaj poprawną liczbę uczestników');
			}

			if (budget < 1) {
				throw new Error('Budżet nie może być mniejszy niż 1 zł');
			}

			await addDoc(tripsCollectionRef, {
				title: title,
				info: info,
				startDate: startDate,
				endDate: endDate,
				startPlace: startPlace,
				endPlace: endPlace,
				maxParticipantsCount: maxParticipantsCount,
				participants: participants,
				budget: budget,
				tags: tags,
				owner: owner,
			});

			toast.success('Pomyślnie dodano nową podróż');
			//Wstępnie ustawiłam na mytrips - można później zmienić
			navigate('/mytrips');
		} catch (error) {
			toast.error('Wystąpił błąd: ' + error.message);
		}
	};

	return (
		<>
			<h4>Dane podstawowe</h4>
			<div className={styles.container}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<label htmlFor='title'>Dodaj tytuł podróży</label>
					<span> (max. 200 znaków)</span>
					<input
						type='text'
						name='title'
						id='title'
						placeholder='np. Wakacje 2023'
						maxLength='200'
						required
					/>
					<legend>Dodaj opis swojej podróży</legend>
					<span> (max. 1500 znaków)</span>
					<textarea
						type='text'
						name='info'
						id='info'
						placeholder='Opisz tutaj swój plan na podróż'
						maxLength='1500'
						required
					></textarea>
					<div className={styles.data}>
						<legend>Data</legend>
						<label htmlFor='startDate'>Wylot</label>
						<input type='date' name='startDate' id='startDate' required />
						<label htmlFor='endDate'>Powrót</label>
						<input type='date' name='endDate' id='endDate' required />
					</div>
					<div className={styles.places}>
						<legend>Miejsce docelowe</legend>
						<label htmlFor='startPlace'>Początek podróży</label>
						<input
							type='text'
							name='startPlace'
							id='startPlace'
							placeholder='Z'
							required
						/>
						<label htmlFor='endPlace'>Miejsce docelowe</label>
						<input
							type='text'
							name='endPlace'
							id='endPlace'
							placeholder='Do'
							required
						/>
					</div>
					<label htmlFor='maxParticipantsCount'>Podaj ilość uczestników</label>
					<input
						type='number'
						name='maxParticipantsCount'
						id='maxParticipantsCount'
						placeholder='Podaj liczbę'
						required
					/>

					<legend>Budżet</legend>
					<label htmlFor='budget'>Podaj szacowany koszt podróży per uczestnik</label>
					<input
						type='number'
						name='budget'
						id='budget'
						placeholder='Podaj koszt'
						required
					/>

					<legend>Tagi</legend>
					<textarea
						type='text'
						name='tags'
						id='tags'
						placeholder='Dodaj tagi określające typ podróży'
						required
					></textarea>

					<div className={styles.btn}>
						<button>Dodaj podróż</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default AddTrip;
