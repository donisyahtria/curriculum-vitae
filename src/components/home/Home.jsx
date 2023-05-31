import { React, useEffect } from "react";
import Foto from "../../assets/Foto.png";
import "./home.css";
import ScrollReveal from "scrollreveal";

function Home() {
  useEffect(() => {
    const scrollReveal = ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    scrollReveal.reveal(".home-content, .heading", { origin: "top" });
    scrollReveal.reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
    scrollReveal.reveal(".home-content h1, .about-img", { origin: "left" });
    scrollReveal.reveal(".home-content p, .about-content", { origin: "right" });
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hey, It's Me</h3>
        <h1>Doni Syahtria</h1>
        <h3>
          And I'm a <span className="multiple-text"></span>
        </h3>
        <p>I'm a frontend developer and welcome to my colorful world. Frontend is the art of making image that work with distracting from what they Illustrate.</p>
        <div className="social-media">
          <a href="mailto:mdonisyahtria@gmail.com">
            <i className="bx bx-envelope"></i>
          </a>
          <a href="https://github.com/donisyahtria">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/donisyahtria/">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://wa.me/6282128400127">
            <i className="bx bxl-whatsapp"></i>
          </a>
        </div>
        <a href="docs.google.com/uc?export=download&id=196idqOC4wzQFzFHIDVu63fds7H7I55_c" download className="btn">
          {/* Harusnya bukan #home tapi download link */}
          Download CV
        </a>
      </div>
      <div className="home-img">
        <img src={Foto} alt="" />
      </div>
    </section>
  );
}

export default Home;
