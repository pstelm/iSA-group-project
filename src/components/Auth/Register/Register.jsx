import styles from './Register.module.css';
import useAuth from '../../../contexts/AuthContext';
import { Toaster, toast } from 'react-hot-toast';
import { auth, db } from '../../../config/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';
import { firebaseErrors } from '../../../utils/firebaseErrors';
import GrayButton from '../../GrayButton/GrayButton';

const Register = () => {
	const navigate = useNavigate();

	const { register } = useAuth();

	const addUserToCollection = async (newUserData) => {
		try {
			if (auth.currentUser) {
				const docRef = doc(db, 'Users', auth.currentUser.uid);

				await setDoc(docRef, newUserData);

				toast.success('Witaj w aplikacji!');
				navigate('/');
			}
		} catch (error) {
			if (error.code) {
				toast.error('Wystąpił błąd: ' + firebaseErrors[error.code]);
			} else {
				toast.error('Wystąpił błąd: ' + error.message);
			}
		}
	};

	const handleSubmit = async (formEvent) => {
		formEvent.preventDefault();

		try {
			const email = formEvent.target?.email.value;
			const password = formEvent.target?.password.value;
			const password_confirm = formEvent.target?.password_confirm.value;
			const firstName = formEvent.target?.firstName.value;
			const lastName = formEvent.target?.lastName.value;
			const sex = formEvent.target?.sexF.checked ? 'F' : 'M';
			const birthDate = new Date (formEvent.target?.birthDate.value);

			if (firstName === '') {
				throw new Error('Imię nie może być puste');
			}

			if (lastName === '') {
				throw new Error('Nazwisko nie może być puste');
			}

			if (email === '') {
				throw new Error('Email nie może być pusty');
			}

			if (password === '') {
				throw new Error('Hasło nie może być puste');
			}

			if (password !== password_confirm) {
				throw new Error('Hasła muszą być takie same');
			}

			await register(email, password);

			const newUserData = {
				email: email,
				firstName: firstName,
				lastName: lastName,
				sex: sex,
				birthDate: birthDate,
			};

			addUserToCollection(newUserData);

			formEvent.target.reset();
		} catch (error) {
			if (error.code) {
				toast.error('Wystąpił błąd: ' + firebaseErrors[error.code]);
			} else {
				toast.error('Wystąpił błąd: ' + error.message);
			}
		}
	};

	return (
		<>
			<Toaster />
			<div className={styles.container}>
				<header className={styles.header}>
					<Link to='/login'>
						<img
							className={styles.arrow}
							src='../../src/assets/arrow.svg'
							alt='Arrow pointing left'
						/>
					</Link>
					<h2>Rejestracja</h2>
				</header>
				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.relative}>
						<div className={styles.data}>
							<h2>Dane podstawowe</h2>
						</div>
						<div className={styles.info}>
							<label htmlFor='text' className={styles.label}>
								Imię
							</label>
							<input
								type='text'
								name='firstName'
								id='firstName'
								className={styles.input}
							/>
							<label htmlFor='text' className={styles.label}>
								Nazwisko
							</label>
							<input
								type='text'
								name='lastName'
								id='lastName'
								className={styles.input}
							/>
							<label htmlFor='birthDate' className={styles.label}>
								Data urodzenia
							</label>
							<input
								type='date'
								name='birthDate'
								id='birthDate'
								title='Data musi zawierać format DD/MM/RRRR'
								className={styles.input}
							/>
							<p>Data musi zawierać format DD/MM/RRRR</p>
							<div className={styles.checkBox}>
								<input
									type='radio'
									name='sex'
									id='sexF'
									defaultChecked={true}
									className={styles.input}
								/>
								<label htmlFor='sexF' className={styles.gender}>
									Kobieta
								</label>
								<input type='radio' name='sex' id='sexM' className={styles.input} />
								<label htmlFor='sexM' className={styles.gender}>
									Mężczyzna
								</label>
							</div>
						</div>
					</div>
					<div className={styles.relative}>
						<div className={styles.data}>
							<h2>Dane logowania</h2>
						</div>
						<div className={styles.info}>
							<label htmlFor='email' className={styles.label}>
								Adres e-mail
							</label>
							<input type='email' name='email' id='email' className={styles.input} />
							<label htmlFor='password' className={styles.label}>
								Hasło
							</label>
							<input
								type='password'
								name='password'
								id='password'
								pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[&%$]).{8,}$'
								title='Twoje hasło musi zawierać 8 znaków, co najmniej 1 cyfrę, 1 znak specjalny i 1 dużą literę'
								className={styles.input}
							/>
							<p>
								Twoje hasło musi zawierać 8 znaków, co najmniej 1 cyfrę, 1 znak
								specjalny i 1 dużą literę
							</p>
							<label htmlFor='password_confirm' className={styles.label}>
								Powtórz hasło
							</label>
							<input
								type='password'
								name='password_confirm'
								id='password_confirm'
								className={styles.input}
							/>
							<p>
								Twoje hasło musi zawierać 8 znaków, co najmniej 1 cyfrę, 1 znak
								specjalny i 1 dużą literę
							</p>
						</div>
					</div>
					<div className={styles.button}>
						<GrayButton btnText={'Zarejestruj się'} />
					</div>
				</form>
			</div>
		</>
	);
};

export default Register;
