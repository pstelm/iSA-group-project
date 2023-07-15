import { Link, Navigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import styles from './Login.module.css';
import useAuth from '../../../contexts/AuthContext';
import { firebaseErrors } from '../../../utils/firebaseErrors';
import GrayButton from '../../GrayButton/GrayButton';
import logo from '/public/assets/logo_transparent.png';

const Login = () => {
	const { login, currentUser } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const email = e.target?.email.value;
		const password = e.target?.password.value;

		try {
			await login(email, password);
		} catch (error) {
			toast.error('Wystąpił błąd: ' + firebaseErrors[error.code]);
		}
	};

	return (
		<>
			<Toaster />
			{!currentUser ? (
				<div className={styles.container}>
					<div className={styles.logo}>
						<img src={logo} alt='Logo CoTravel' />
					</div>
					<form onSubmit={handleSubmit} className={styles.form}>
						<h1>Zaloguj się</h1>
						<label htmlFor='' className={styles.label}>
							E-mail
						</label>
						<input type='text' name='email' className={styles.input} required />
						<label htmlFor='' className={styles.label}>
							Hasło
						</label>
						<input
							type='password'
							name='password'
							className={styles.input}
							id='password'
							pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[&%$]).{8,}$'
							title='Twoje hasło musi zawierać 8 znaków, co najmniej 1 cyfrę, 1 znak specjalny i 1 dużą literę'
							required
						/>
						<p className={styles.hints}>
							Twoje hasło musi zawierać 8 znaków, co
							<br /> najmniej 1 cyfrę, 1 znak specjalny i 1 dużą literę
						</p>
						<p>
							Nie pamiętasz hasła? <Link to='/passwordreminder'>Przypomnij</Link>
						</p>
						<div className={styles.button}>
							<GrayButton type={'submit'} btnText={'Zaloguj się'} />
						</div>
						<p className={styles.hints}>
							Nie masz jeszcze konta? <Link to='/register'>Utwórz</Link>
						</p>
					</form>
				</div>
			) : (
				<Navigate to='/' />
			)}
		</>
	);
};

export default Login;
