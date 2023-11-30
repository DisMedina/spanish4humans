import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/logo2new.svg";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <nav className="navbar container_nav">
      <div className="logo" onClick={scrollToTop}>
        <img src={logo} alt="Logo" />
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <ScrollLink
              to="s4h_home"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as needed
              duration={500}
              className={activeSection === "s4h_home" ? "nav_home active" : "nav_home"}
              onClick={() => {
                toggleMenu();
                setActiveSection("s4h_home");
              }}
              onSetActive={() => handleSetActive("s4h_home")}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="s4h_semblance"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as needed
              duration={500}
              className={activeSection === "s4h_semblance" ? "nav_semblance active" : "nav_semblance"}
              onClick={() => {
                toggleMenu();
                setActiveSection("s4h_semblance");
              }}
              onSetActive={() => handleSetActive("s4h_semblance")}
            >
              Semblance
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="s4h_mission"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as needed
              duration={500}
              className={activeSection === "s4h_mission" ? "nav_mission active" : "nav_mission"}
              onClick={() => {
                toggleMenu();
                setActiveSection("s4h_mission");
              }}
              onSetActive={() => handleSetActive("s4h_mission")}
            >
              Our Purpose
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="s4h_servicecards"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as needed
              duration={500}
              className={activeSection === "s4h_servicecards" ? "nav_servicecards active" : "nav_servicecards"}
              onClick={() => {
                toggleMenu();
                setActiveSection("s4h_servicecards");
              }}
              onSetActive={() => handleSetActive("s4h_servicecards")}
            >
              Courses
            </ScrollLink>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
