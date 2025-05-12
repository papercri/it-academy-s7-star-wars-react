import styles from "./Form.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import appFirebase from "../../utils/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";


const auth = getAuth(appFirebase);

function Register() {

  const [registering, setRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // ✅ Hook para redirigir

  const authFunction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      if (registering) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const db = getDatabase(appFirebase);
        const user = userCredential.user;

        await set(ref(db, 'users/' + user.uid), {
          email: user.email,
          uid: user.uid,
          createdAt: new Date().toISOString(),
        });

        navigate("/starships"); 
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/starships"); 
      }
    } catch (error: any) {
      console.error("Firebase error:", error);
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