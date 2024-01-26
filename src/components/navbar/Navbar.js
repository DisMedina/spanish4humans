import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/SH_Logo_Small.svg";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigateHome = () => {
    if (location.pathname === "/") {
      scroll.scrollToTop();
    } else {
      navigate("/");
    }
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <nav className="navbar container_nav">
      <div className="logo" onClick={navigateHome}>
        <img src={logo} alt="Logo" />
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <ScrollLink
              // to="s4h_home"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as needed
              duration={500}
              className={activeSection === "s4h_home" ? "nav_home active" : "nav_home"}
              onClick={() => {
                toggleMenu();
                navigateHome();
                setActiveSection("s4h_home");
              }}
              // onSetActive={() => handleSetActive("s4h_home")}
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
          <li>
            <ScrollLink
              to="s4h_carousel"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as needed
              duration={500}
              className={activeSection === "s4h_carousel" ? "nav_carousel active" : "nav_carousel"}
              onClick={() => {
                toggleMenu();
                setActiveSection("s4h_carousel");
              }}
              onSetActive={() => handleSetActive("s4h_carousel")}
            >
              Testimonies
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
