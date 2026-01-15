import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
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
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#platforms">Platforms</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Get in Touch</a></li>
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
    </footer>
  );
}

export default Footer;
