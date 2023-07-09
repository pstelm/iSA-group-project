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
		if (currentUser) {
			getUserData(currentUser.uid, setUser);
		}
	}, [currentUser]);

	const getUpdatedUserData = (e) => {
		const { firstName, lastName, city, aboutMe } = e.currentTarget.elements;

		const user = {
			firstName: firstName.value,
			lastName: lastName.value,
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
