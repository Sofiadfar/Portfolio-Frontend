import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current URL path

  // Helper: map pathname to navbar item name
  const getActiveItem = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/about":
        return "About";
      case "/skills":
        return "Skills";
      case "/projects":
        return "Projects";
      case "/contact":
        return "Contact";
      default:
        return "";
    }
  };

  const active = getActiveItem();

  return (
    <nav className={styles.navbar}>
      <motion.h2
        className={styles.logo}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Sofi <span className={styles.highlight}>Adfar</span>
      </motion.h2>

      {/* Desktop Menu */}
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={active === "Home" ? styles.active : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={active === "About" ? styles.active : ""}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className={active === "Skills" ? styles.active : ""}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={active === "Projects" ? styles.active : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={active === "Contact" ? styles.active : ""}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className={styles.mobileMenu}>
        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className={styles.mobileNavLinks}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ type: "spring", damping: 18 }}
            >
              <li>
                <Link
                  to="/"
                  className={active === "Home" ? styles.active : ""}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={active === "About" ? styles.active : ""}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className={active === "Skills" ? styles.active : ""}
                  onClick={() => setIsOpen(false)}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={active === "Projects" ? styles.active : ""}
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={active === "Contact" ? styles.active : ""}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
