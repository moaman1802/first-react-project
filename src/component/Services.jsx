import "./Services.css";

function Services() {
  return (

<section id="services" className="services">
          <h2>Our Services</h2>
      <p className="sub-text">Driving innovation through technology</p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Corporate websites, dashboards & web apps</p>
        </div>

        <div className="service-card">
          <h3>Mobile App Development</h3>
          <p>Android & iOS modern applications</p>
        </div>

        <div className="service-card">
          <h3>Cloud Solutions</h3>
          <p>AWS, Azure & scalable cloud platforms</p>
        </div>

        <div className="service-card">
          <h3>AI & Data Analytics</h3>
          <p>Machine learning & business insights</p>
        </div>

        <div className="service-card">
          <h3>Cyber Security</h3>
          <p>Secure systems & data protection</p>
        </div>

        <div className="service-card">
          <h3>UI / UX Design</h3>
          <p>Beautiful & user-friendly interfaces</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
