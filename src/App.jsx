import { Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Platforms from "./pages/Platforms";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
