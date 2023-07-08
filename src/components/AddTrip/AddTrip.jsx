import React from 'react';
import styles from './AddTrip.module.css';
import { db } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../contexts/AuthContext';
import { toast } from 'react-hot-toast';
import { Popup } from 'reactjs-popup';
import tagsData from './Tags/tags.json';
import Tags from './Tags/Tags';
import { useState } from 'react';

const AddTrip = () => {
	const tripsCollectionRef = collection(db, 'Trips');

	const [selectedTags, setSelectedTags] = useState([]);

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
			const tags = selectedTags;
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
			navigate('/mytrips/ownedtrips');
		} catch (error) {
			toast.error('Wystąpił błąd: ' + error.message);
		}
	};

	const handleCancel = (e) => {
		e.preventDefault();
		navigate('/');
	};

	return (
		<>
			<h4 className={styles.add_trip_header}>Dane podróży</h4>
			<Popup
				trigger={
					<button type='button' className={styles.button_back}>
						<img src='/src/assets/arrow.svg' alt='arrow' />
					</button>
				}
				modal
				nested
			>
				{(close) => (
					<div className={styles.modal_container}>
						<div className={styles.modal}>
							<button className={styles.close_sign} onClick={close}>
								&times;
							</button>
							<div className={styles.modal_header}>
								Czy na pewno chcesz anulować tworzenie podróży? <br />
							</div>
							<div className={styles.modal_content}>
								Spowoduje to usunięcie wszystkich wprowadzonych danych.
							</div>
							<div className={styles.actions_container}>
								<button
									className={styles.button_actions}
									onClick={() => {
										close();
									}}
								>
									Powrót
								</button>
								<button
									className={styles.button_actions}
									type='button'
									onClick={handleCancel}
								>
									Potwierdź
								</button>
							</div>
						</div>
					</div>
				)}
			</Popup>

			<div className={styles.container}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.title_container}>
						<label htmlFor='title' className={styles.labels}>
							Tytuł*
						</label>
						<span className={styles.small_notes}> (max. 200 znaków)</span>
						<input
							className={styles.input_add_title}
							type='text'
							name='title'
							id='title'
							placeholder='np. Wakacje 2023'
							maxLength='200'
							required
						/>
					</div>
					<div className={styles.describtion_container}>
						<label className={styles.labels}>Opis podróży*</label>
						<span className={styles.small_notes}> (max. 1500 znaków)</span>
						<textarea
							className={styles.textarea_add_trip}
							type='text'
							name='info'
							id='info'
							placeholder='Możesz tutaj wpisać plan na swoją wycieczkę...'
							maxLength='1500'
							required
						></textarea>
					</div>

					<div className={styles.places_container}>
						<legend className={styles.labels}>Miejsce docelowe*</legend>
						<div className={styles.places}>
							<input
								className={styles.input_add_trip}
								type='text'
								name='startPlace'
								id='startPlace'
								placeholder='Z'
								required
							/>

							<input
								className={styles.input_add_trip}
								type='text'
								name='endPlace'
								id='endPlace'
								placeholder='Do'
								required
							/>
						</div>
					</div>

					<div className={styles.dates_container}>
						<legend className={styles.labels}>Data</legend>

						<div className={styles.dates}>
							<label htmlFor='startDate' className={styles.small_notes}>
								Początek
							</label>
							<input
								className={styles.input_add_trip}
								type='date'
								name='startDate'
								id='startDate'
								required
							/>

							<label htmlFor='endDate' className={styles.small_notes}>
								Powrót
							</label>
							<input
								className={styles.input_add_trip}
								type='date'
								name='endDate'
								id='endDate'
								required
							/>
						</div>
					</div>

					<div className={styles.participants_container}>
						<label htmlFor='maxParticipantsCount' className={styles.labels}>
							Podaj ilość uczestników
						</label>
						<input
							className={styles.input_add_trip}
							type='number'
							name='maxParticipantsCount'
							id='maxParticipantsCount'
							placeholder='Podaj liczbę'
							onWheel={(e) => e.target.blur()}
							required
						/>
					</div>
					<div className={styles.budget_container}>
						<legend className={styles.labels}>Budżet</legend>
						<label htmlFor='budget' className={styles.small_notes}>
							Podaj szacowany koszt podróży per uczestnik
						</label>
						<input
							className={styles.input_add_trip}
							type='number'
							name='budget'
							id='budget'
							placeholder='Podaj koszt'
							onWheel={(e) => e.target.blur()}
							required
						/>
					</div>
					<div className={styles.tags_container}>
						<legend className={styles.labels_tag}>Tagi</legend>
						<label htmlFor='tags' className={styles.small_notes}>
							Dodaj tagi określające charakter i styl Twojej podróży
						</label>
						<Tags
							tags={tagsData}
							selectedTags={selectedTags}
							setSelectedTags={setSelectedTags}
						/>
					</div>

					<div className={styles.buttons_form}>
						<Popup
							trigger={
								<button type='button' className={styles.button_cancel}>
									{' '}
									Anuluj{' '}
								</button>
							}
							modal
							nested
						>
							{(close) => (
								<div className={styles.modal_container}>
									<div className={styles.modal}>
										<button className={styles.close_sign} onClick={close}>
											&times;
										</button>
										<div className={styles.modal_header}>
											Czy na pewno chcesz anulować tworzenie podróży? <br />
										</div>
										<div className={styles.modal_content}>
											Spowoduje to usunięcie wszystkich wprowadzonych danych.
										</div>
										<div className={styles.actions_container}>
											<button
												className={styles.button_actions}
												onClick={() => {
													close();
												}}
											>
												Powrót
											</button>
											<button
												className={styles.button_actions}
												type='button'
												onClick={handleCancel}
											>
												Potwierdź
											</button>
										</div>
									</div>
								</div>
							)}
						</Popup>
						<button className={styles.button_add}>Zapisz</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default AddTrip;
