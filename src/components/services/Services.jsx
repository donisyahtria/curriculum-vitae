import React from "react";
import "./services.css";

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        Our <span>Services</span>
      </h2>

      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Website</h3>
          <p>Ignite your digital presence with our professional services. We craft captivating, responsive websites that amplify your brand and captivate your audience. Trust our expertise and help your business thrive online.</p>
          <a href="#portfolio" className="btn">
            {/* href belum di isi */}
            More
          </a>
        </div>

        <div className="services-box">
          <i className="bx bx-devices"></i>
          <h3>Mobile</h3>
          <p>
            Experience the pinnacle of mobile app development services. We turn your visions into reality with stunning, user-friendly apps that drive growth and success. Trust our expertise to deliver exceptional results for your business.
          </p>
          <a href="#portfolio" className="btn">
            {/* href belum di isi */}
            More
          </a>
        </div>

        <div className="services-box">
          <i className="bx bx-building-house"></i>
          <h3>3D</h3>
          <p>Elevate your space with our exceptional interior design services. We create captivating and functional environments that reflect your unique style and enhance your living or working spaces.</p>
          <a href="#portfolio" className="btn">
            {/* href belum di isi */}
            More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
