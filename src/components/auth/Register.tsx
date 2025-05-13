// components/auth/Register.tsx
import styles from "./Auth.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import appFirebase from "../../utils/firebase";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuth } from "../../context/user.context";

function Register() {
  const auth = getAuth(appFirebase);
  const { setUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });
      setUser(user);

      navigate("/starships");
    } catch (error: any) {
      console.error("Register error:", error);
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("The email is already in use.");
      } else if (error.code === "auth/invalid-email") {
        setErrorMessage("Invalid email format.");
      } else if (error.code === "auth/weak-password") {
        setErrorMessage("Password should be at least 6 characters.");
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <main className="container xs mx-auto px-4 mb-6 pb-6 pt-6 mtop">
      <h1>Register</h1>
      <form className={styles.form} onSubmit={handleRegister}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit">Sign Up</button>
      </form>

      <p className="mt-5 text-left ml-2 font-bold">
        Already have an account? <a href="/login" className={styles.link}>Log In</a>
      </p>
    </main>
  );
}

export default Register;
