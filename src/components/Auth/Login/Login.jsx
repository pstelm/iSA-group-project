import { Link, Navigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import styles from "./Login.module.css";
import useAuth from "../../../contexts/AuthContext";
import { firebaseErrors } from "../../../utils/firebaseErrors";

const Login = () => {
  const { login, currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target?.email.value;
    const password = e.target?.password.value;

    try {
      await login(email, password);
    } catch (error) {
      toast.error("Wystąpił błąd: " + firebaseErrors[error.code]);
    }
  };

  return (
    <>
      <Toaster />
      {!currentUser ? (
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="../../src/assets/logo.png" alt="Logo CoTravel" />
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="" className={styles.label}>
              Adres e-mail
            </label>
            <input type="text" name="email" className={styles.input} required />
            <label htmlFor="" className={styles.label}>
              Hasło
            </label>
            <input
              type="password"
              name="password"
              className={styles.input}
              required
            />
            <button className={styles.button} type="submit">
              Zaloguj się
            </button>
            <p>
              Nie masz jeszcze konta? <Link to="/register">Utwórz</Link>
            </p>
          </form>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Login;
