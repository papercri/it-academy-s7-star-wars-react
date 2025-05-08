import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
            <Link className={styles.link} to="/">
              Home 
            </Link>
            </li>
            <li className={styles.menuItem}>
            <Link className={styles.link} to="/starships">
              Starships
            </Link>
            </li>
          </ul>
        </nav>
    );
}

export default Navbar;
