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
    <section id="home" className="hero">
      
      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/vid.mp4" type="video/mp4" />
      </video>

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
