import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../config/firebase';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import { firebaseErrors } from '../../../utils/firebaseErrors';
import styles from '../PasswordReminder/PasswordReminder.module.css';
import GrayButton from '../../GrayButton/GrayButton';

const PasswordReminder = () => {
	const navigate = useNavigate();

	const handlePasswordReminder = async (e) => {
		e.preventDefault();
		try {
			await sendPasswordResetEmail(auth, e.target.email.value).then(() => {
				toast.success('Wysłano e-mail z linkiem do resetu hasła', {
					duration: 1000,
				});
				new Promise((r) => setTimeout(r, 1500)).then(() => navigate('/login'));
			});
		} catch (error) {
			toast.error('Wystąpił błąd: ' + firebaseErrors[error.code]);
		}
	};

	return (
		<div className={styles.container}>
			<Toaster />
			<header className={styles.header}>
				<Link to='/login'>
					<img
						className={styles.arrow}
						src='../../src/assets/arrow.svg'
						alt='Arrow pointing left'
					/>
				</Link>
				<h2>Przypomnij hasło</h2>
			</header>
			<form onSubmit={handlePasswordReminder} className={styles.form}>
				<label htmlFor='email' className={styles.label}>
					Podaj adres e-mail
				</label>
				<input
					type='email'
					name='email'
					id='email'
					className={styles.input}
					required
				/>
				<div className={styles.button}>
					<GrayButton type={'submit'} btnText={'Wyślij'} />
				</div>
			</form>
		</div>
	);
};

export default PasswordReminder;
