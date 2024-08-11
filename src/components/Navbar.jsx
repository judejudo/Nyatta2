import logo from "../images/logo/nyatta_logo2.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the menu toggle
import { is } from "date-fns/locale/is";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomepage, setIsHomepage] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    currentPath === "/" ? setIsHomepage(true) : setIsHomepage(false);
  });

  return (
    <nav
      className={`fixed font-luxjost flex text-xl   h-20 items-center z-20 w-full transition-all duration-300  ${
        isHomepage
          ? isBlurred
            ? "backdrop-blur bg-white/50  text-orange-600"
            : "bg-transparent  text-white"
          : isBlurred
          ? "backdrop-blur bg-white/50  text-orange-600"
          : "bg-transparent  text-orange-600"
      }`}
    >
      <div className="flex items-center justify-between w-full px-6 py-4 md:px-10">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-[80px] md:h-[100px]" />
        </Link>
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div>
          <ul
            className={` ${
              isMenuOpen ? "flex" : "hidden"
            } flex-col items-center space-y-6 absolute left-0 top-[80px] w-full   text-white md:flex md:static md:flex-row md:space-x-9 md:space-y-0 md:bg-transparent md:text-inherit md:shadow-none`}
          >
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutUs" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contactUs" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
