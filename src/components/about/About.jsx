import React from "react";
import "./about.css";
import Foto from "../../assets/Foto.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={Foto} alt="" /> {/* Gunakan variabel yang menyimpan path gambar */}
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Frontend Developer</h3>
        <p>
          Graduate of Computer Science from Lampung University, with experience in Front-end Development gained through work, internships, and projects. I have a keen interest in pursuing a career as a Front-End Web Developer and Network
          Engineer. I am highly motivated, eager to learn, take full responsibility for my work, and adapt quickly.
        </p>
        <a href="#contact" className="btn">
          {/* href belum di isi */}
          More
        </a>
      </div>
    </section>
  );
}

export default About;
