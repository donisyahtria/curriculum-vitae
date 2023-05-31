import React from "react";
import "./portfolio.css";
import Port1 from "../../assets/Port1.png";
import Port2 from "../../assets/Port2.png";
import Port3 from "../../assets/Port3.png";
import Port4 from "../../assets/Port4.png";
import Port5 from "../../assets/Port5.png";
import Port6 from "../../assets/Port6.png";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={Port1} alt="" />
          <div className="portfolio-layer">
            <h4>Dogereborn</h4>
            <p>A landing page of a company that sells crypto coins</p>
            {/* <a href="#more">
              href belum di isi
              <i className="bx bx-link"></i>
            </a> */}
          </div>
        </div>

        <div className="portfolio-box">
          <img src={Port2} alt="" />
          <div className="portfolio-layer">
            <h4>Bitcoin Mural</h4>
            <p>A landing page of a company that sells crypto coins</p>
            {/* <a href="#more">
              href belum di isi
              <i className="bx bx-link"></i>
            </a> */}
          </div>
        </div>

        <div className="portfolio-box">
          <img src={Port3} alt="" />
          <div className="portfolio-layer">
            <h4>Monitoring</h4>
            <p>CMS for monitoring timeline employee</p>
            {/* <a href="#more">
              href belum di isi
              <i className="bx bx-link"></i>
            </a> */}
          </div>
        </div>

        <div className="portfolio-box">
          <img src={Port4} alt="" />
          <div className="portfolio-layer">
            <h4>Dashboard CMS</h4>
            <p>Dashboard for monitoring internship attendance</p>
            {/* <a href="#more">
              href belum di isi
              <i className="bx bx-link"></i>
            </a> */}
          </div>
        </div>

        <div className="portfolio-box">
          <img src={Port5} alt="" />
          <div className="portfolio-layer">
            <h4>SIKEMA</h4>
            <p>Mobile apps using for internship attendance</p>
            {/* <a href="#more">
              href belum di isi
              <i className="bx bx-link"></i>
            </a> */}
          </div>
        </div>

        <div className="portfolio-box">
          <img src={Port6} alt="" />
          <div className="portfolio-layer">
            <h4>Virtual Game</h4>
            <p>3D virtual map mobile application of a campus</p>
            {/* <a href="#more">
              href belum di isi
              <i className="bx bx-link"></i>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
