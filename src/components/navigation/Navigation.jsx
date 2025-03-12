import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import BurgerMenu from "../burgerMenu/BurgerMenu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 650) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="/">
        <div className="logo-container">
          <div className="ancient-logo">FREMTIDENS</div>
          <div className="journeys-logo">WEB</div>
        </div>
      </a>

      <div className="burger-menu" onClick={toggleMenu}>
        <BurgerMenu />
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/article">Artikel</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Ind</NavLink>
        </li>
        <li>
          <NavLink to="/">Din Konto</NavLink>
        </li>
        <li>
          <NavLink to="/">Kontakt</NavLink>
        </li>
        <div className="socialIconContainer">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="socialIcon" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="socialIcon" />
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
