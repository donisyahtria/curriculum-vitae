import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const [phone, setPhone] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handlePhoneChange = (event) => {
    const input = event.target.value;
    const cleanedInput = input.replace(/\D/g, ""); // Hapus karakter non-angka
    setPhone(cleanedInput);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_kds03qb", "template_l13170w", form.current, "_P5JV41VQNo-rhEK5").then(
      () => {
        e.target.reset();
        setPhone("");
        setIsMessageSent(true);

        setTimeout(() => {
          setIsMessageSent(false);
        }, 3000); // Set timeout selama 3 detik (3000 ms)
      },

      (error) => {
        console.log("Error sending email:", error.text);
      }
    );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>

      <form ref={form} onSubmit={sendEmail}>
        <div className="input-box">
          <input type="text" name="name" placeholder="Full Name" />
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="input-box">
          <input
            type="tel"
            name="phone"
            id="phone-input"
            placeholder="Phone"
            pattern="[0-9]*" // Hanya menerima karakter angka
            inputMode="numeric" // Tampilan keyboard numerik pada perangkat mobile
            maxLength="16"
            value={phone}
            onChange={handlePhoneChange}
          />
          <input type="text" name="subject" placeholder="Subject" />
        </div>
        <textarea name="message" id="" cols="30" rows="7" placeholder="Your Message"></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>

      {isMessageSent && (
        <div className="notification">
          <p>Thank you! Your message has been sent.</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
