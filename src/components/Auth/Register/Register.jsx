import styles from "./Register.module.css";
import useAuth from "../../../contexts/AuthContext";
import { toast } from "react-hot-toast";
import { db } from "../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();
  const usersCollectionRef = collection(db, "Users");

  const { register } = useAuth();

  const handleSubmit = async (formEvent) => {
    formEvent.preventDefault();

    try {
      const email = formEvent.target?.email.value;
      const password = formEvent.target?.password.value;
      const password_confirm = formEvent.target?.password_confirm.value;
      const firstName = formEvent.target?.firstName.value;
      const lastName = formEvent.target?.lastName.value;
      const sex = formEvent.target?.sexF.checked ? "F" : "M";

      if (email === "") {
        throw new Error("Email nie może być pusty");
      }

      if (password === "") {
        throw new Error("Hasło nie może być puste");
      }

      if (password !== password_confirm) {
        throw new Error("Hasła muszą być takie same");
      }

      if (firstName === "") {
        throw new Error("Imię nie może być puste");
      }

      if (lastName === "") {
        throw new Error("Nazwisko nie może być puste");
      }

      await register(email, password);
      await addDoc(usersCollectionRef, {
        email: email,
        firstName: firstName,
        lastName: lastName,
        sex: sex,
      });
      toast.success("Witaj w aplikacji!");
      navigate("/");
      formEvent.target.reset();
    } catch (error) {
      toast.success("Wystąpił błąd: " + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="text">Imię</label>
        <input type="text" name="firstName" id="firstName" />
        <label htmlFor="text">Nazwisko</label>
        <input type="text" name="lastName" id="lastName" />
        <label htmlFor="sexF">Kobieta</label>
        <input type="radio" name="sex" id="sexF" defaultChecked={true} />
        <label htmlFor="sexM">Mężczyzna</label>
        <input type="radio" name="sex" id="sexM" />
        <label htmlFor="email">Adres email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Hasło</label>
        <input
          type="password"
          name="password"
          id="password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[&%$]).{8,}$"
          title="Twoje hasło musi zawierać 8 znaków, co najmniej 1 cyfrę, 1 znak specjalny i 1 dużą literę"
        />
        <p>
          Twoje hasło musi zawierać 8 znaków, co najmniej 1 cyfrę, 1 znak
          specjalny i 1 dużą literę
        </p>
        <label htmlFor="password_confirm">Powtórz hasło</label>
        <input type="password" name="password_confirm" id="password_confirm" />
        <button type="submit">Zarejestruj się</button>
      </form>
    </div>
  );
};

export default Register;
