
import Head from "./head/Head";
import Navbar from "./navbar/Navbar";

function Header() {
    return (
      <header className="container fluid wrap">
       <Head />
        <Navbar />
      </header>
    );
  }
  export default Header;