import styles from "./Form.module.scss";
import { useState } from "react";
import appFirebase from "../../utils/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";


const auth = getAuth(appFirebase);

function Register() {

  const [registering, setRegistering] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const authFunction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(""); // Limpiar cualquier mensaje de error previo

    try {
      if (registering) {
        // Registro de usuario
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const db = getDatabase(appFirebase);
        const user = userCredential.user;

        // Guardar el usuario en la base de datos de Firebase Realtime Database
        await set(ref(db, 'users/' + user.uid), {
          email: user.email,
          uid: user.uid,
          createdAt: new Date().toISOString(),
        });
      } else {
        // Inicio de sesión del usuario
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error: any) {
      console.error("Firebase error:", error); // Para que veas el error en consola
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage("The email is already in use.");
      } else if (error.code === 'auth/invalid-email') {
        setErrorMessage("Invalid email format.");
      } else if (error.code === 'auth/weak-password') {
        setErrorMessage("Password should be at least 6 characters.");
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <main className="container xs mx-auto px-4 mb-6 pb-6 pt-6 mtop">
      <h1>{registering ? "Register" : "Log In"}</h1>
      <div>
        <form className={styles.form} onSubmit={authFunction}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">
            {registering ? "Sign Up" : "Log In"}
          </button>
        </form>
        <p className="mt-5 text-left ml-2 font-bold">
          {registering ? "Already have an account? " : "Don't have an account? "}
          <button className={styles.link} onClick={() => setRegistering(!registering)}>
            {!registering ? "Sign Up" : "Log In"}
          </button>
        </p>
      </div>
    </main>
  );
}

export default Register