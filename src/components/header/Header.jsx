import { React, useEffect, useState } from "react";
import "./header.css";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isSticky ? "sticky" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
      <a href="#home" className="logo">
        Porto
      </a>

      <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`} id="menu-icon" onClick={handleMenuClick}></i>

      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
