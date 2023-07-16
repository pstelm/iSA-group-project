import React from 'react';
import styles from './AddTrip.module.css';
import { db } from '../../config/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../contexts/AuthContext';
import { toast } from 'react-hot-toast';
import tagsData from './Tags/tags.json';
import Tags from './Tags/Tags';
import { useState } from 'react';
import countriesData from '../../components/Countries/countries.json';
import Countries from '../../components/Countries/Countries.jsx';
import { getStorage, ref, uploadBytes } from '@firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { ModalPopup } from '../../components';
import iconBack from '/public/assets/icons/chevron-left-solid.svg';
import iconPlus from '/public/assets/icons/plus-solid.svg';
import emptyTripPhoto from '/public/assets/icons/camera.png';

const AddTrip = () => {
	const [selectedTags, setSelectedTags] = useState([]);
	const tripID = uuidv4();

	const [selectedFromCountry, setSelectedFromCountry] = useState('');
	const [selectedToCountry, setSelectedToCountry] = useState('');

	const { currentUser } = useAuth();

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const title = e.target.title.value;
			const info = e.target.info.value;
			const startDate = new Date(e.target.startDate.value);
			const endDate = new Date(e.target.endDate.value);
			const fromCity = e.target.fromCity.value;
			const fromCountry = selectedFromCountry;
			const toCity = e.target.toCity.value;
			const toCountry = selectedToCountry;
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

			const newTripRef = doc(db, 'Trips', tripID);

			await setDoc(newTripRef, {
				title: title,
				info: info,
				startDate: startDate,
				endDate: endDate,
				fromCity: fromCity,
				fromCountry: fromCountry,
				toCity: toCity,
				toCountry: toCountry,
				maxParticipantsCount: maxParticipantsCount,
				participants: participants,
				budget: budget,
				tags: tags,
				owner: owner,
			});

			if (tripPhoto) {
				const pathReference = ref(storage, `tripsPhoto/${tripID}.jpg`);
				await uploadBytes(pathReference, tripPhoto);
			}

			toast.success('Pomyślnie dodano nową podróż');
			navigate('/mytrips/ownedtrips');
		} catch (error) {
			toast.error('Wystąpił błąd: ' + error.message);
		}
	};

	const storage = getStorage();
	const [tripPhoto, setTripPhoto] = useState();

	const handlePhotoAdd = async (e) => {
		const file = e.target.files[0];
		if (file) {
			setTripPhoto(file);
			toast.success('Pomyślnie dodano zdjęcie');
		}
	};

	const handleCancel = () => {
		navigate('/');
		toast.error('Twoje zmiany nie zostały zapisane');
	};

	return (
		<>
			<div className={styles.container_add_trip}>
				<div className={styles.header_container}>
					<ModalPopup
						triggerBtn={
							<div className={styles.button_back_container}>
								<button className={styles.button_back}>
									<img src={iconBack} alt='Go back' />
								</button>
								<h3>Stwórz podróż</h3>
							</div>
						}
						modalHeader='Czy na pewno chcesz anulować tworzenie podróży?'
						modalAdditionalInfo='Spowoduje to usunięcie wszystkich wprowadzonych danych.'
						handleConfirmCancelationClick={handleCancel}
					/>
				</div>

				{tripPhoto ? (
					<div className={styles.photo_container}>
						<img
							src={URL.createObjectURL(tripPhoto)}
							alt='zdjęcie opisujące podróż'
							id='tripPhoto'
							className={styles.trip_photo}
						/>
					</div>
				) : (
					<div className={styles.photo_container}>
						<div className={styles.add_photo}>
							<img
								src={emptyTripPhoto}
								alt='ikonka aparatu fotograficznego'
								className={styles.add_photo_icon}
							/>
						</div>
					</div>
				)}

				<label onChange={handlePhotoAdd} htmlFor='editTripPhoto'>
					<input
						type='file'
						id='editTripPhoto'
						className={styles.edit_trip_photo}
						accept='.jpg'
						multiple={false}
						hidden
					/>
					<div className={styles.add_photo_plus}>
						<img src={iconPlus} />
					</div>
				</label>

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
							/>
						</div>

						<div className={styles.places_container}>
							<legend className={styles.labels}>Miejsce wyjazdu*</legend>
							<div className={styles.places}>
								<input
									className={styles.input_add_trip}
									type='text'
									name='fromCity'
									id='fromCity'
									placeholder='Z'
									required
								/>
								<Countries
									countriesData={countriesData}
									selectedCountry={selectedFromCountry}
									setSelectedCountry={setSelectedFromCountry}
								/>
							</div>
						</div>

						<div className={styles.places_container}>
							<legend className={styles.labels}>Miejsce docelowe*</legend>
							<div className={styles.places}>
								<input
									className={styles.input_add_trip}
									type='text'
									name='toCity'
									id='toCity'
									placeholder='Do'
									required
								/>
								<Countries
									countriesData={countriesData}
									selectedCountry={selectedToCountry}
									setSelectedCountry={setSelectedToCountry}
								/>
							</div>
						</div>

						<div className={styles.dates_container}>
							<legend className={styles.labels}>Data</legend>

							<div className={styles.dates}>
								<div>
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
								</div>

								<div>
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
						</div>

						<div className={styles.participants_container}>
							<div className={styles.participants}>
								<label htmlFor='maxParticipantsCount' className={styles.labels}>
									Podaj łączną ilość uczestników
								</label>
								<div className={styles.hint}>
									<p>Pamiętaj, że Ty również jesteś uczestnikiem podróży!</p>
								</div>
							</div>
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
							<ModalPopup
								triggerBtn={
									<button type='button' className={styles.button_cancel}>
										Anuluj
									</button>
								}
								modalHeader='Czy na pewno chcesz anulować tworzenie podróży?'
								modalAdditionalInfo='Spowoduje to usunięcie wszystkich wprowadzonych danych.'
								handleConfirmCancelationClick={handleCancel}
							/>
							<button className={styles.button_add}>Zapisz</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddTrip;
