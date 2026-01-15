import Hero from "../component/Hero";
import Services from "../component/Services";
import Platforms from "../component/Platforms";
import Careers from "../component/Careers";
import About from "../component/About";
import Contact from "../component/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Platforms />
      <Careers />
      <About />
      <Contact />
    </>
  );
}

export default Home;
