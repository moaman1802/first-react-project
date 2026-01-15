import { useEffect, useState } from "react";
import "./Footer.css";

function Footer() {
  const [showTop, setShowTop] = useState(false);

  // 👇 JS: show / hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 JS: smooth scroll
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // 👇 JS: scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer fade-in">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-box">
          <h3>ShahTech</h3>
          <p>
            Building innovative digital solutions to help businesses
            navigate their next.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h4>Quick Links</h4>
          <ul>
            <li><button onClick={() => scrollToSection("home")}>Home</button></li>
            <li><button onClick={() => scrollToSection("services")}>Services</button></li>
            <li><button onClick={() => scrollToSection("platforms")}>Platforms</button></li>
            <li><button onClick={() => scrollToSection("careers")}>Careers</button></li>
            <li><button onClick={() => scrollToSection("contact")}>Get in Touch</button></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-box">
          <h4>Services</h4>
          <ul>
            <li>Web Development</li>
            <li>Mobile Applications</li>
            <li>Cloud Solutions</li>
            <li>AI & Data Analytics</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h4>Contact</h4>
          <p>Email: info@shahtech.com</p>
          <p>Phone: +91 9536063146 , 7055165787</p>
          <p>India</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ShahTech. All rights reserved.</p>
      </div>

      {/* Back to top */}
      {showTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </footer>
  );
}

export default Footer;
