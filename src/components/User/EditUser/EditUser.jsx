import React, { useEffect, useState } from 'react';
import styles from './EditUser.module.css';
import BackButton from '../../BackButton/BackButton';
import Popup from 'reactjs-popup';
import useAuth from '../../../contexts/AuthContext';
import { getUserData } from '../../../utils/getUserData';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const EditUser = () => {
	const { currentUser } = useAuth();

	const [user, setUser] = useState();

	const navigate = useNavigate();

	useEffect(() => {
		getUserData(currentUser.uid, setUser);
	}, []);

	const getUpdatedUserData = (e) => {
		const { firstName, lastName, birthDate, city, aboutMe } =
			e.currentTarget.elements;

		const user = {
			firstName: firstName.value,
			lastName: lastName.value,
			birthDate: new Date(birthDate.value),
			sex: e.currentTarget.sexF.checked ? 'F' : 'M',
			city: city?.value,
			aboutMe: aboutMe?.value,
		};

		return user;
	};

	const handleSaveUpdatedUserData = async (e) => {
		e.preventDefault();
		try {
			const userRef = doc(db, 'Users', currentUser.uid);
			await updateDoc(userRef, getUpdatedUserData(e));
			toast.success('Twoje dane zostały poprawnie zapisane');
			navigate('/userprofile');
		} catch (error) {
			toast.error('Błąd serwera');
		}
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

	return (
		<>
			{user ? (
				<div className={styles.container}>
					<BackButton sectionTitle={'Edycja profilu użytkownika'} />
					<div className={styles.form_container}>
						<form
							onSubmit={(e) => handleSaveUpdatedUserData(e)}
							className={styles.form}
						>
							<h3 className={styles.title}>Dane podstawowe</h3>
							<label htmlFor='firstName' className={styles.label}>
								Imię
							</label>
							<input
								type='text'
								name='firstName'
								id='firstName'
								className={styles.input}
								defaultValue={user.firstName}
								required
							/>
							<label htmlFor='lastName' className={styles.label}>
								Nazwisko
							</label>
							<input
								type='text'
								name='lastName'
								id='lastName'
								className={styles.input}
								defaultValue={user.lastName}
								required
							/>
							<label htmlFor='city' className={styles.label}>
								Miasto
							</label>
							<input
								type='text'
								name='city'
								id='city'
								className={styles.input}
								defaultValue={user.city}
							/>
							<label htmlFor='birthDate' className={styles.label}>
								Data urodzenia
							</label>
							<input
								type='date'
								name='birthDate'
								id='birthDate'
								className={styles.input}
								defaultValue={firebaseDateToInputDate(user.birthDate)}
								required
							/>
							<p className={styles.label}>Płeć</p>
							{user.sex === 'F' ? (
								<div className={styles.checkBox}>
									<input
										type='radio'
										name='sex'
										id='sexF'
										className={styles.input}
										defaultChecked={true}
									/>
									<label htmlFor='sexF' className={styles.gender}>
										Kobieta
									</label>
									<input type='radio' name='sex' id='sexM' className={styles.input} />
									<label htmlFor='sexM' className={styles.gender}>
										Mężczyzna
									</label>
								</div>
							) : (
								<div className={styles.checkBox}>
									<input type='radio' name='sex' id='sexF' className={styles.input} />
									<label htmlFor='sexF' className={styles.gender}>
										Kobieta
									</label>
									<input
										type='radio'
										name='sex'
										id='sexM'
										className={styles.input}
										defaultChecked={true}
									/>
									<label htmlFor='sexM' className={styles.gender}>
										Mężczyzna
									</label>
								</div>
							)}
							<h3 className={styles.title}>O mnie</h3>
							<textarea
								className={styles.textarea}
								type='text'
								name='aboutMe'
								id='aboutMe'
								placeholder='Napisz coś o sobie...'
								defaultValue={user.aboutMe}
							></textarea>
							<div className={styles.btn_container}>
								<Popup
									trigger={
										<button type='button' className={styles.cancel_btn}>
											Anuluj
										</button>
									}
									modal
									nested
								>
									{(close) => (
										<div className={styles.overlay}>
											<div className={styles.modal}>
												<button className={styles.close_sign} onClick={close}>
													&times;
												</button>
												<div className={styles.modal_header}>
													Czy na pewno chcesz anulować edycję?
												</div>
												<p className={styles.modal_additional_info}>
													Spowoduje to usunięcie wszystkich wprowadzonych danych.
												</p>
												<div className={styles.actions}>
													<button
														className={`${styles.actions_btn} + ${styles.actions_btn_cancel}`}
														onClick={() => close()}
													>
														Powrót
													</button>
													<button
														className={`${styles.actions_btn} + ${styles.actions_btn_confirm}`}
														onClick={() => {
															navigate('/userprofile');
															toast.error('Twoje zmiany nie zostały zapisane');
															close();
														}}
													>
														Potwierdź
													</button>
												</div>
											</div>
										</div>
									)}
								</Popup>
								<button type='submit' className={styles.save_btn}>
									Zapisz
								</button>
							</div>
						</form>
					</div>
				</div>
			) : null}
		</>
	);
};

export default EditUser;
