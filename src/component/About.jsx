import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About ShahTech</h2>
        <p className="tagline">Technology that drives growth</p>

        <p className="about-text">
          ShahTech is a technology-driven IT solutions company focused on
          delivering innovative, scalable and secure digital solutions for
          businesses across industries. We help organizations transform and
          grow using modern technology platforms.
        </p>

        <div className="about-points">
          <div>✔ Trusted IT Partner</div>
          <div>✔ Modern Technology Stack</div>
          <div>✔ Client-focused Approach</div>
          <div>✔ Quality & Security Driven</div>
        </div>
      </div>
    </section>
  );
}

export default About;
