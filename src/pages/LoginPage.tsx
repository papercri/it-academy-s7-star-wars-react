import Navbar from "../components/layout/header/Header";
import Welcome from "../components/form/Welcome"; // Ensure the file exists at this path
import Register from "../components/form/Register";
import { useState, useEffect } from 'react';
import appFirebase from "../utils/firebase";

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { User } from "../types/Interfaces";

//mira si el usuario ya está logueado
const auth = getAuth(appFirebase);

function LoginPage() {
  
  const [user, setUser] = useState<null | User>(null);

  // Monitoriza el estado de autenticación del usuario
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
   
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar />
      {user ? <Welcome user={user} /> : <Register />} 
    </>
  );
}

export default LoginPage