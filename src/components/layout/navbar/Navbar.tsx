import styles from "./Navbar.module.scss";
import logo from "../../../assets/images/logo-star-wars.png";

function Navbar() {
    return (
      <section className="container fluid">
        <header className={styles.header}>
       
          <figure className={styles.logo}>
            <img src={logo} alt="Star Wars Logo" />
          </figure>
          <div className={styles.auth}>
            <a href="/login">Log In</a>
            <span>//</span>
            <a href="/signup">Sign Up</a>
          </div>
        </header>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
             <a>Home</a> 
            </li>
            <li className={styles.menuItem}>
              <a>Starships</a>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
  export default Navbar;