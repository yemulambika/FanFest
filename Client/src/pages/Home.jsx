import Navbar from "../components/Navbar.jsx";
import Hero from "../sections/Hero/Hero.jsx";
import About from "../sections/About/About.jsx";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Footer />
    </>
  );
}

export default Home;