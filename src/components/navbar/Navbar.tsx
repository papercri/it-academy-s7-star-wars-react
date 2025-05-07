import styles from "./Navbar.module.scss";
import logo from "../../assets/images/logo-star-wars.png";


function Navbar() {
    return (
      <header className="container">
        
        <nav className={styles.nav}>
         <figure className={styles.logo}>
          <img src={logo} alt="Star Wars Logo" />
          </figure>
        <ul className="flex gap-6 text-sm uppercase">
          <li className="hover:text-accent cursor-pointer">Home</li>
          <li className="text-accent border-b-2 border-accent pb-1">Starships</li>
        </ul>
        <div className="text-sm text-secondary">Log in // Sign up</div>
        </nav>
      </header>
      
    );
  }
  export default Navbar;