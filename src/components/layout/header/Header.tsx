
import Head from "./head/Head";
import Navbar from "./navbar/Navbar";

function Header() {
    return (
      <header className="container fluid wrap sticky bg-[#0d0d0d] z-10">
       <Head />
        <Navbar />
      </header>
    );
  }
  export default Header;