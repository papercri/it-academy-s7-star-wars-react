import { Link } from "react-router-dom";
import "../assets/styles/homePage.scss";

function HomePage() {
  return (
    
    <main className="homePage">
      <div className="content">
        <img src="../../src/assets/images/sw-logo-home.png" alt="Star Wars Logo" className="logo" />
        <h1>Discover the galaxy far, far away</h1>
        <Link to="/starships"><button className="cta-button">Begin the journey</button></Link>
      </div>
    </main>
  )
}

export default HomePage