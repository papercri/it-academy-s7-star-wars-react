import { Link } from "react-router-dom";
import "../assets/styles/homePage.scss";
import Button from "../components/ui/Button/Button";

function HomePage() {
  return (
    
    <main className="homePage">
      <div className="content">
        <img src="../../src/assets/images/sw-logo-home.png" alt="Star Wars Logo" className="logo" />
        <h1>Discover the galaxy far, far away</h1>
        <Link to="/starships">
         <Button variant="home" size="xl" type="submit">
           Begin the journey
          </Button>
        </Link>
      </div>
    </main>
  )
}

export default HomePage