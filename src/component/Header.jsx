import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll + menu close
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // mobile menu close
  };

  return (
    <header className="header">
      <div className="header-inner">

        {/* Logo */}
        <div className="logo" onClick={() => handleNavClick("home")}>
          <span>Shah</span>Tech
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <button onClick={() => handleNavClick("home")}>Home</button>
          <button onClick={() => handleNavClick("services")}>Services</button>
          <button onClick={() => handleNavClick("platforms")}>Platforms</button>
          <button onClick={() => handleNavClick("careers")}>Careers</button>
          <button onClick={() => handleNavClick("about")}>About</button>

          <button
            className="cta-btn"
            onClick={() => handleNavClick("contact")}
          >
            Get in Touch
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>
    </header>
  );
}

export default Header;
