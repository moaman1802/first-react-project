import "./Hero.css";

function Hero() {

  const goToServices = () => {
    document.getElementById("services").scrollIntoView({
      behavior: "smooth",
    });
  };

  const goToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg)",
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to ShahTech</h1>
          <p>Navigate your next</p>

          <div className="hero-buttons">
            <button onClick={goToServices}>Explore Services</button>
            <button className="secondary" onClick={goToContact}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
