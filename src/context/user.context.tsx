
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import appFirebase from "../utils/firebase";

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>; 
};
interface UserProviderProps {
  children: ReactNode;
}
const UserContext = createContext<UserContextType | null>(null);

function UserProvider(props: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth(appFirebase);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
export { UserProvider } ;

export const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) {
      throw new Error("useAuth must be used within a UserProvider");
  }
  return context;
};

