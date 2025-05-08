import styles from "./Navbar.module.scss";
import logo from "../../../assets/images/logo-star-wars.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <section className="container fluid wrap">
        <header className={styles.header}>
          <figure className={styles.logo}>
            <img src={logo} alt="Star Wars Logo" />
          </figure>
          <div className={styles.auth}>
            <Link className={styles.linkA} to="/login">
              Log In
            </Link>
            <span className="text-neutral-600">//</span>
            <Link className={styles.linkA} to="/register">
              Sign Up
            </Link>
          </div>
        </header>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
            <Link className={styles.linkM} to="/">
              Home 
            </Link>
            </li>
            <li className={styles.menuItem}>
            <Link className={styles.linkM} to="/starships">
              Starships
            </Link>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
  export default Navbar;