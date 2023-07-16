import React from 'react';
import styles from './EditTrip.module.css';
import useAuth from '../../../contexts/AuthContext';
import { getUserData } from '../../../utils/getUserData';
import {
	doc,
	updateDoc,
	getDoc,
	collection,
	query,
	where,
	documentId,
	getDocs,
} from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import countriesData from '../../Countries/countries.json';
import Countries from '../../Countries/Countries';
import tagsData from '../../AddTrip/Tags/tags.json';
import Tags from '../../AddTrip/Tags/Tags';
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytes,
} from '@firebase/storage';
import { ModalPopup } from '../../index';
import Popup from 'reactjs-popup';
import emptyTripPhoto from '/public/assets/icons/camera.png';
import iconsChevron from '/public/assets/icons/chevron-left-solid.svg';
import iconPlus from '/public/assets/icons/plus-solid.svg';

const EditTrip = () => {
	const { currentUser } = useAuth();
	const [user, setUser] = useState();

	const navigate = useNavigate();

	const [selectedFromCountry, setSelectedFromCountry] = useState('');
	const [selectedToCountry, setSelectedToCountry] = useState('');

	const [selectedTags, setSelectedTags] = useState([]);
	const [participants, setParticipants] = useState([]);

	const [tripPhotoURL, setTripPhotoURL] = useState('');
	const [editedTripPhoto, setEditedTripPhoto] = useState();

	const { tripID } = useParams();
	const [trip, setTrip] = useState();
	const tripRef = doc(db, 'Trips', tripID);

	const storage = getStorage();
	const pathReference = ref(storage, `tripsPhoto/${tripID}.jpg`);

	const getTrip = async () => {
		try {
			const tripSnap = await getDoc(tripRef);

			if (tripSnap.exists()) {
				const tripFilteredData = tripSnap.data();
				setTrip(tripFilteredData);
				setSelectedFromCountry(tripFilteredData.fromCountry);
				setSelectedToCountry(tripFilteredData.toCountry);
				setSelectedTags(tripFilteredData.tags);
				if (tripFilteredData.participants.length > 0) {
					const participants = await fetchParticipantsData(
						tripFilteredData.participants
					);
					setParticipants(participants);
				}

				getDownloadURL(pathReference)
					.then((url) => {
						setTripPhotoURL(url);
					})
					.catch((error) => {
						console.log(error);
					});
			} else {
				toast.error('Nie znaleziono podróży');
			}
		} catch (error) {
			console.log(error);
			toast.error('Błąd serwera');
		}
	};

	const fetchParticipantsData = async (partcipantsIDs) => {
		const participantsRef = query(
			collection(db, 'Users'),
			where(documentId(), 'in', partcipantsIDs),
			where(documentId(), '!=', currentUser.uid)
		);
		const participants = await getDocs(participantsRef);

		return participants.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
	};

	const firebaseDateToInputDate = (date) => {
		let day = date.toDate().getDate();
		let month = date.toDate().getMonth() + 1;
		const year = date.toDate().getFullYear();

		if (day < 10) {
			day = '0' + day;
		}

		if (month < 10) {
			month = '0' + month;
		}
		return `${year}-${month}-${day}`;
	};

	const handleSaveUpdatedTripData = async (e) => {
		e.preventDefault();
		try {
			const tripRef = doc(db, 'Trips', tripID);
			const title = e.target.title.value;
			const info = e.target.info.value;
			const startDate = new Date(e.target.startDate.value);
			const endDate = new Date(e.target.endDate.value);
			const fromCity = e.target.fromCity.value;
			const fromCountry = selectedFromCountry;
			const toCity = e.target.toCity.value;
			const toCountry = selectedToCountry;
			const maxParticipantsCount = Number(e.target.maxParticipantsCount.value);
			const budget = Number(e.target.budget.value);
			const tags = selectedTags;
			const participantsIds = participants.map((participant) => participant.id);
			const participantsWithOwner = [...participantsIds, currentUser.uid];

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

			await updateDoc(tripRef, {
				title: title,
				info: info,
				startDate: startDate,
				endDate: endDate,
				fromCity: fromCity,
				fromCountry: fromCountry,
				toCity: toCity,
				toCountry: toCountry,
				maxParticipantsCount: maxParticipantsCount,
				participants: participantsWithOwner,
				budget: budget,
				tags: tags,
			});

			if (editedTripPhoto) {
				const pathReference = ref(storage, `tripsPhoto/${tripID}.jpg`);
				await uploadBytes(pathReference, editedTripPhoto);
			}
			toast.success('Zmiany zostały zapisane');
			navigate(-1);
		} catch (error) {
			toast.error('Wystąpił błąd: ' + error.message);
		}
	};

	const handlePhotoAdd = async (e) => {
		const file = e.target.files[0];
		if (file) {
			setTripPhotoURL(URL.createObjectURL(file));
			setEditedTripPhoto(file);
			toast.success('Pomyślnie dodano zdjęcie');
		}
	};

	const handleDeleteParticipant = async (partcipantID) => {
		if (participants) {
			setParticipants(
				participants.filter((participant) => participant.id !== partcipantID)
			);
		}
	};

	useEffect(() => {
		getUserData(currentUser.uid, setUser);
		getTrip();
	}, []);

	const handleCancel = () => {
		navigate(-1);
		toast.error('Twoje zmiany nie zostały zapisane');
	};

	return (
		<>
			{user ? (
				<div className={styles.container}>
					<div className={styles.header_container}>
						<ModalPopup
							triggerBtn={
								<div className={styles.button_back_container}>
									<button className={styles.button_back}>
										<img src={iconsChevron} alt='Go back' />
									</button>
									<h3>Edytuj podróż</h3>
								</div>
							}
							modalHeader='Czy na pewno chcesz anulować edycję podróży?'
							modalAdditionalInfo='Spowoduje to usunięcie wszystkich wprowadzonych danych.'
							handleConfirmCancelationClick={handleCancel}
						/>
					</div>
					{tripPhotoURL ? (
						<div className={styles.photo_container}>
							<img
								src={tripPhotoURL}
								alt='zdjęcie opisujące podróż'
								id='tripPhoto'
								className={styles.trip_photo}
							/>
						</div>
					) : (
						<div className={styles.photo_container}>
							<div className={styles.trip_photo_empty}>
								<img
									src={emptyTripPhoto}
									alt='ikonka aparatu fotograficznego'
									className={styles.icon_edit_trip}
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

					<form
						onSubmit={handleSaveUpdatedTripData}
						className={styles.form_container}
					>
						<div className={styles.form}>
							<div className={styles.trip_info_box}>
								<label htmlFor='title' className={styles.labels}>
									Tytuł
								</label>
								<input
									type='text'
									id='title'
									name='title'
									defaultValue={trip.title}
									required
									className={styles.title}
								/>
							</div>
							<div className={styles.trip_info_box}>
								<label htmlFor='info' className={styles.labels}>
									Opis
								</label>
								<textarea
									id='info'
									name='info'
									defaultValue={trip.info}
									required
									className={styles.textarea_add_trip}
								/>
							</div>

							<div className={styles.trip_info_box}>
								<div className={styles.countries_container}>
									<label htmlFor='fromCity' className={styles.labels}>
										Miejsce wyjazdu
									</label>
									<div className={styles.places}>
										<input
											className={styles.input_add_trip}
											id='fromCity'
											name='fromCity'
											defaultValue={trip.fromCity}
											required
										/>

										<Countries
											countriesData={countriesData}
											selectedCountry={selectedFromCountry}
											setSelectedCountry={setSelectedFromCountry}
										/>
									</div>
								</div>

								<div className={styles.countries_container}>
									<label htmlFor='toCity' className={styles.labels}>
										Miejsce docelowe
									</label>
									<div className={styles.places}>
										<input
											className={styles.input_add_trip}
											id='toCity'
											name='toCity'
											defaultValue={trip.toCity}
											required
										/>

										<Countries
											countriesData={countriesData}
											selectedCountry={selectedToCountry}
											setSelectedCountry={setSelectedToCountry}
										/>
									</div>
								</div>
							</div>

							<div className={styles.trip_info_box}>
								<div className={styles.dates_container}>
									<legend className={styles.labels}>Data</legend>
									<div className={styles.dates}>
										<div>
											<label htmlFor='startDate' className={styles.small_notes}>
												Początek
											</label>
											<input
												type='date'
												id='startDate'
												name='startDate'
												required
												defaultValue={firebaseDateToInputDate(trip.startDate)}
												className={styles.input_add_trip}
											/>
										</div>

										<div>
											<label htmlFor='endDate' className={styles.small_notes}>
												Powrót
											</label>
											<input
												type='date'
												id='endDate'
												name='endDate'
												required
												defaultValue={firebaseDateToInputDate(trip.endDate)}
												className={styles.input_add_trip}
											/>
										</div>
									</div>
								</div>
							</div>

							<div className={styles.trip_info_box}>
								<div className={styles.participants_container}>
									<label htmlFor='maxParticipantsCount' className={styles.labels}>
										Maksymalna liczba uczestników
									</label>
									<input
										type='number'
										id='maxParticipantsCount'
										name='maxParticipantsCount'
										defaultValue={trip.maxParticipantsCount}
										required
										className={styles.input_add_trip}
										onWheel={(e) => e.target.blur()}
									/>
								</div>
							</div>

							<div className={styles.trip_info_box}>
								<div className={styles.participants_data_container}>
									<label htmlFor='participants' className={styles.labels}>
										Zapisani uczestnicy:
									</label>
									<div className={styles.participants_border}>
										{participants.length > 0 ? (
											participants.map((participant) => {
												return (
													<div className={styles.participant} key={participant.id}>
														{participant.firstName} {participant.lastName}
														<button
															className={styles.remove_user_btn}
															type='button'
															onClick={() => handleDeleteParticipant(participant.id)}
														>
															Usuń
														</button>
													</div>
												);
											})
										) : (
											<div>Nikt się jeszcze nie zapisał</div>
										)}
									</div>
								</div>
							</div>

							<div className={styles.trip_info_box}>
								<div className={styles.budget_container}>
									<label htmlFor='budget' className={styles.labels}>
										Budżet
									</label>
									<input
										type='number'
										id='budget'
										name='budget'
										defaultValue={trip.budget}
										onWheel={(e) => e.target.blur()}
										className={styles.input_add_trip}
										required
									/>
								</div>
							</div>

							<div className={styles.trip_info_box}>
								<div className={styles.tags_container}>
									<label htmlFor='tags' className={styles.labels}>
										Tagi
									</label>
									<Tags
										tags={tagsData}
										selectedTags={selectedTags}
										setSelectedTags={setSelectedTags}
									/>
								</div>
							</div>

							<div className={styles.btn_container}>
								<ModalPopup
									triggerBtn={
										<button type='button' className={styles.cancel_btn}>
											Anuluj
										</button>
									}
									modalHeader='Czy na pewno chcesz anulować edycję podróży?'
									modalAdditionalInfo='Spowoduje to usunięcie wszystkich wprowadzonych danych.'
									handleConfirmCancelationClick={handleCancel}
								/>
								<button type='submit' className={styles.save_btn}>
									Zapisz
								</button>
							</div>
						</div>
					</form>
				</div>
			) : null}
		</>
	);
};

export default EditTrip;
