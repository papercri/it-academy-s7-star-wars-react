import styles from "./Head.module.scss";
import logo from "../../../../assets/images/logo-star-wars.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import { getAuth, signOut } from 'firebase/auth';
import appFirebase from "../../../../utils/firebase.ts"

const Head = () => {
  const { user } = useAuth();
  const auth = getAuth(appFirebase);

  return (
    <section className={styles.header}>
      <figure className={styles.logo}>
        <img src={logo} alt="Star Wars Logo" />
      </figure>

      {user ? (
        <div className={styles.auth}>
          <span>Welcome, {user.email}</span>
          <button className={styles.link} onClick={() => signOut(auth)}>
            Log Out
          </button>
        </div>
      ) : (
        <div className={styles.auth}>
          <Link className={styles.link} to="/login">
            Log In
          </Link>
          <span className="text-neutral-600">//</span>
          <Link className={styles.link} to="/register">
            Sign Up
          </Link>
        </div>
      )}
    </section>
  );
};

export default Head;
