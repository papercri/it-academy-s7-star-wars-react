import styles from "./Head.module.scss";
import logo from "/images/logo-star-wars.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/user.context.tsx";
import { getAuth, signOut } from 'firebase/auth';
import appFirebase from "../../../../utils/firebase.ts"

const Head = () => {
  const { user } = useAuth();
  const auth = getAuth(appFirebase);
  const navigate = useNavigate();
  const handleSignOut = async () => {
    if (user) {
      signOut(auth);
      navigate("/"); 
    }
  };
  return (
    <section className={styles.header}>
      <figure className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Star Wars Logo" />
        </Link>
      </figure>

      {user ? (
        <div className={styles.auth}>
          <span className={styles.wname}>Welcome, <span className="capitalize">{user?.displayName}</span></span>
          <button className={styles.link} onClick={handleSignOut}>
            Log Out
          </button>
        </div>
      ) : (
        <div className={styles.auth}>
          <Link className={styles.link} to="/login">
            Sign In
          </Link>
          <span className="text-neutral-400 sm:inline-block hidden">//</span>
          <Link className={styles.link} to="/register">
            Sign Up
          </Link>
        </div>
      )}
    </section>
  );
};

export default Head;
