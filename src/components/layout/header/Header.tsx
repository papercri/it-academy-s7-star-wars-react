
import Head from "./head/Head";
import Navbar from "./navbar/Navbar";

function Header() {
    return (
      <section className="container fluid wrap">
       <Head />
        <Navbar />
      </section>
    );
  }
  export default Header;