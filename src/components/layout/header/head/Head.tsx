import styles from "./Head.module.scss";
import logo from "../../../../assets/images/logo-star-wars.png";
import { Link } from "react-router-dom";

const Head = () => {
    return (
        <header className={styles.header}>
          <figure className={styles.logo}>
            <img src={logo} alt="Star Wars Logo" />
          </figure>
          <div className={styles.auth}>
            <Link className={styles.link} to="/login">
              Log In
            </Link>
            <span className="text-neutral-600">//</span>
            <Link className={styles.link} to="/register">
              Sign Up
            </Link>
          </div>
        </header>
    );
}

export default Head;
