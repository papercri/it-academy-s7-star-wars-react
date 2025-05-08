import { Link } from "react-router-dom";
import "../assets/styles/homePage.scss";

function HomePage() {
  return (
    
    <main className="hero">
      <div className="content">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" alt="Star Wars Logo" className="logo" />
        <h1>Discover the galaxy far, far away</h1>
        <Link to="/starships"><button className="cta-button">Begin the journey</button></Link>
      </div>
  </main>
  )
}

export default HomePage