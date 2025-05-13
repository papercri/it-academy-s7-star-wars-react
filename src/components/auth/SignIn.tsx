/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./Auth.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import appFirebase from "../../utils/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../context/user.context";
import  Input  from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import { useAuthErrorMessage } from "../../hooks/useAuthErrorMessage";

function SignIn() {
  const auth = getAuth(appFirebase);
  const { setUser } = useAuth(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); 
  const { getErrorMessage } = useAuthErrorMessage();

  const authFunction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

     try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      navigate("/starships");
    } catch (error: any) {
      console.error("Login error:", error);
      setErrorMessage(getErrorMessage(error.code));
    }
  };
  return (
    <main className="container xs mx-auto px-4 mb-6 pb-6 pt-6 mtop">
      <h1>Sign In</h1>
      <div>
        <form className={styles.form} onSubmit={authFunction} noValidate>
         
        <Input
          label="Email"
          name="email"
          type="email"
          value={email}
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          required
          error={errorMessage.includes("email") ? errorMessage : ""}
        />
         <Input
          label="Password"
          name="password"
          type="password"
          value={password}
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
          required
          error={errorMessage.includes("password") ? errorMessage : ""}
        />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <Button variant="accent" size="md" type="submit">
           Sign In
          </Button>
        </form>
        <p className="mt-5 text-left ml-2 font-bold">
          Don't have an account? <a href="/register" className={styles.link}>Sign Up</a>
        </p>
      </div>
    </main>
  );
}

export default SignIn