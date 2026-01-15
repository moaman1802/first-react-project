import { useEffect } from "react";
import "./Careers.css";

function Careers() {

  // 👇 JS Logic: Scroll animation
  useEffect(() => {
    const cards = document.querySelectorAll(".career-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.15}s`;
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  // 👇 JS Logic: Apply button
  const applyNow = (role) => {
    alert(`You applied for: ${role}\nOur team will contact you soon.`);
  };

  return (
    <section id="careers" className="careers">
      <h2>Careers at ShahTech</h2>
      <p className="sub-text">Build your future with us</p>

      <div className="careers-grid">
        <div className="career-card">
          <h3>Frontend Developer</h3>
          <p>React, JavaScript, HTML, CSS</p>
          <button onClick={() => applyNow("Frontend Developer")}>
            Apply Now
          </button>
        </div>

        <div className="career-card">
          <h3>Backend Developer</h3>
          <p>Node.js, Express, MongoDB</p>
          <button onClick={() => applyNow("Backend Developer")}>
            Apply Now
          </button>
        </div>

        <div className="career-card">
          <h3>UI / UX Designer</h3>
          <p>Figma, Adobe XD</p>
          <button onClick={() => applyNow("UI / UX Designer")}>
            Apply Now
          </button>
        </div>

        <div className="career-card">
          <h3>Cloud Engineer</h3>
          <p>AWS, Azure, DevOps</p>
          <button onClick={() => applyNow("Cloud Engineer")}>
            Apply Now
          </button>
        </div>

        <div className="career-card">
          <h3>Intern – Web Development</h3>
          <p>Freshers welcome</p>
          <button onClick={() => applyNow("Intern – Web Development")}>
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Careers;
