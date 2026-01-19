import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import mobileLogo from "../../assets/SH_Logo_Small.svg";
import desktopLogo from "../../assets/SH_Logo_Black_Long.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [logoSrc, setLogoSrc] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1024) {
        setLogoSrc(mobileLogo);
      } else {
        setLogoSrc(desktopLogo);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-white/90 shadow-lg' : 'backdrop-blur-sm bg-white/80'
      } border-b border-neutral-200/50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div
              className="flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={navigateHome}
            >
              <img src={logoSrc} alt="Spanish for Humans Logo" className="h-12 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-8">
              <li>
                <ScrollLink
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium relative group ${
                    activeSection === "s4h_home" ? "text-primary-600" : ""
                  }`}
                  onClick={() => {
                    navigateHome();
                    setActiveSection("s4h_home");
                  }}
                >
                  Home
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
                    activeSection === "s4h_home" ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="s4h_semblance"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium relative group ${
                    activeSection === "s4h_semblance" ? "text-primary-600" : ""
                  }`}
                  onClick={() => setActiveSection("s4h_semblance")}
                  onSetActive={() => handleSetActive("s4h_semblance")}
                >
                  Semblance
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
                    activeSection === "s4h_semblance" ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="s4h_mission"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium relative group ${
                    activeSection === "s4h_mission" ? "text-primary-600" : ""
                  }`}
                  onClick={() => setActiveSection("s4h_mission")}
                  onSetActive={() => handleSetActive("s4h_mission")}
                >
                  Our Purpose
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
                    activeSection === "s4h_mission" ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="s4h_servicecards"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium relative group ${
                    activeSection === "s4h_servicecards" ? "text-primary-600" : ""
                  }`}
                  onClick={() => setActiveSection("s4h_servicecards")}
                  onSetActive={() => handleSetActive("s4h_servicecards")}
                >
                  Courses
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
                    activeSection === "s4h_servicecards" ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="s4h_carousel"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium relative group ${
                    activeSection === "s4h_carousel" ? "text-primary-600" : ""
                  }`}
                  onClick={() => setActiveSection("s4h_carousel")}
                  onSetActive={() => handleSetActive("s4h_carousel")}
                >
                  Testimonies
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
                    activeSection === "s4h_carousel" ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </ScrollLink>
              </li>
            </ul>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {showMenu ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-primary-600 to-accent-600 z-40 transition-transform duration-300 ease-in-out ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          <li>
            <ScrollLink
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white text-2xl font-semibold hover:text-primary-100 transition-colors duration-200 cursor-pointer"
              onClick={() => {
                toggleMenu();
                navigateHome();
                setActiveSection("s4h_home");
              }}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="s4h_semblance"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white text-2xl font-semibold hover:text-primary-100 transition-colors duration-200 cursor-pointer"
              onClick={() => {
                toggleMenu();
                setActiveSection("s4h_semblance");
              }}
            >
              Semblance
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="s4h_mission"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white text-2xl font-semibold hover:text-primary-100 transition-colors duration-200 cursor-pointer"
              onClick={() => {
                toggleMenu();
                setActiveSection("s4h_mission");
              }}
            >
              Our Purpose
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="s4h_servicecards"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white text-2xl font-semibold hover:text-primary-100 transition-colors duration-200 cursor-pointer"
              onClick={() => {
                toggleMenu();
                setActiveSection("s4h_servicecards");
              }}
            >
              Courses
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="s4h_carousel"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white text-2xl font-semibold hover:text-primary-100 transition-colors duration-200 cursor-pointer"
              onClick={() => {
                toggleMenu();
                setActiveSection("s4h_carousel");
              }}
            >
              Testimonies
            </ScrollLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
