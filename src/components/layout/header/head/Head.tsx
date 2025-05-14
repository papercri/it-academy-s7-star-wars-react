import styles from "./Head.module.scss";
import logo from "../../../../assets/images/logo-star-wars.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/user.context.tsx";
import { getAuth, signOut } from 'firebase/auth';
import appFirebase from "../../../../utils/firebase.ts"

const Head = () => {
  const { user } = useAuth();
  const auth = getAuth(appFirebase);

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
          <button className={styles.link} onClick={() => signOut(auth)}>
            Log Out
          </button>
        </div>
      ) : (
        <div className={styles.auth}>
          <Link className={styles.link} to="/login">
            Log In
          </Link>
          <span className="text-neutral-400 sm:inline-block hidden">//</span>
          <Link className={styles.link} to="/login">
            Sign Up
          </Link>
        </div>
      )}
    </section>
  );
};

export default Head;
