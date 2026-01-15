import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">

        {/* Logo */}
        <div className="logo">
          <span>Shah</span>Tech
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#platforms">Platforms</a>
          <a href="#careers">Careers</a>
          <a href="#about">About</a>

          <a href="#contact" className="cta-btn">
            Get in Touch
          </a>
        </nav>

        {/* Mobile Menu */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

      </div>
    </header>
  );
}

export default Header;
