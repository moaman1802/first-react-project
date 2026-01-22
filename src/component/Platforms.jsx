import { useEffect } from "react";
import "./Platforms.css";

function Platforms() {

  // 👇 JS Logic (Scroll Animation)
  useEffect(() => {
    const cards = document.querySelectorAll(".platform-card");

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

  return (
    <section id="platforms" className="platforms">

      {/* Background Video */}
      <video
        className="platforms-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/vid3.mp4" type="video/mp4" />
      </video>

      <h2>Our Platforms</h2>
      <p className="sub-text">Powering digital transformation</p>

      <div className="platforms-grid">
        <div className="platform-card">
          <h3>Cloud Platforms</h3>
          <p>AWS, Microsoft Azure, Google Cloud</p>
        </div>

        <div className="platform-card">
          <h3>Web Platforms</h3>
          <p>React, Angular, Node.js</p>
        </div>

        <div className="platform-card">
          <h3>Mobile Platforms</h3>
          <p>Android, iOS, Flutter</p>
        </div>

        <div className="platform-card">
          <h3>Data & AI</h3>
          <p>Machine Learning, Analytics, AI</p>
        </div>

        <div className="platform-card">
          <h3>DevOps</h3>
          <p>CI/CD, Docker, Kubernetes</p>
        </div>

        <div className="platform-card">
          <h3>Security</h3>
          <p>Cloud security, compliance, audits</p>
        </div>
      </div>
    </section>
  );
}

export default Platforms;
