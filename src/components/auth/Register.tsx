
import styles from "./Auth.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import appFirebase from "../../utils/firebase";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuth } from "../../context/user.context";
import  Input  from "../ui/Input/Input.tsx";
import Button from "../ui/Button/Button.tsx";
import { useAuthErrorMessage } from "../../hooks/useAuthErrorMessage";

function Register() {
  const auth = getAuth(appFirebase);
  const { setUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { getErrorMessage } = useAuthErrorMessage();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });
      setUser(user);

      navigate("/starships");
    } catch (error: unknown) {
      if (error instanceof Error && 'code' in error) {
        console.error("Login error:", error);
        setErrorMessage(getErrorMessage((error as { code: string }).code));
      } else {
        console.error("Unexpected error:", error);
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <main className="container xs mx-auto px-4 mb-6 pb-6 pt-6 mtop">
      <h1>Register</h1>
      <form className={styles.form} onSubmit={handleRegister} noValidate>
        <Input
          label="Name"
          name="name"
          type="name"
          value={name}
          placeholder="Your name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>)  => setName(e.target.value)}
          required
      
        />

        <Input
          label="Email"
          name="email"
          type="email"
          value={email}
          placeholder="Your email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>)  => setEmail(e.target.value)}
          required
          error={errorMessage.includes("email") ? errorMessage : ""}
        />

         <Input
          label="Password"
          name="password"
          type="password"
          value={password}
          placeholder="Your password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>)  => setPassword(e.target.value)}
          required
          error={errorMessage.includes("password") ? errorMessage : ""}
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}

         <Button variant="accent" size="md" type="submit">
           Sign Up
          </Button>
      </form>

      <p className="mt-5 text-left ml-2 font-bold">
        Already have an account? <a href="/login" className={styles.link}>Sign In</a>
      </p>
    </main>
  );
}

export default Register;
