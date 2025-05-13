/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./Auth.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import appFirebase from "../../utils/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../context/user.context";


function SignIn() {
  const auth = getAuth(appFirebase);
  const { setUser } = useAuth(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); 

  const authFunction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

     try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      navigate("/starships");
    } catch (error: any) {
      console.error("Login error:", error);
      if (error.code === "auth/user-not-found") {
        setErrorMessage("User not found.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("Wrong password.");
      } else {
        setErrorMessage(error.message);
      }
    }
  };
  return (
    <main className="container xs mx-auto px-4 mb-6 pb-6 pt-6 mtop">
      <h1>Sign In</h1>
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
            Log In
          </button>
        </form>
        <p className="mt-5 text-left ml-2 font-bold">
          Don't have an account? <a href="/register" className={styles.link}>Sign Up</a>
        </p>
      </div>
    </main>
  );
}

export default SignIn