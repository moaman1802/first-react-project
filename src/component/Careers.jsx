import "./Careers.css";

function Careers() {
  return (
    <section id="careers" className="careers">
      <h2>Careers at ShahTech</h2>
      <p className="sub-text">Build your future with us</p>

      <div className="careers-grid">
        <div className="career-card">
          <h3>Frontend Developer</h3>
          <p>React, JavaScript, HTML, CSS</p>
          <button>Apply Now</button>
        </div>

        <div className="career-card">
          <h3>Backend Developer</h3>
          <p>Node.js, Express, MongoDB</p>
          <button>Apply Now</button>
        </div>

        <div className="career-card">
          <h3>UI / UX Designer</h3>
          <p>Figma, Adobe XD</p>
          <button>Apply Now</button>
        </div>

        <div className="career-card">
          <h3>Cloud Engineer</h3>
          <p>AWS, Azure, DevOps</p>
          <button>Apply Now</button>
        </div>

        <div className="career-card">
          <h3>Intern – Web Development</h3>
          <p>Freshers welcome</p>
          <button>Apply Now</button>
        </div>
      </div>
    </section>
  );
}

export default Careers;
