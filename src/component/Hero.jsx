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
      className="hero"s
      style={{
        backgroundImage:
"url(https://images.unsplash.com/photo-1503614472-8c93d56e92ce?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D)",     
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
