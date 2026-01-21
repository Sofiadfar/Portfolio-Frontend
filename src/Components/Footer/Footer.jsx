import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Icons
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3>Sofi Adfar</h3>
          <p>Frontend Developer | React Developer</p>
        </div>

        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.social}>
          <h4>Follow Me</h4>
          <div className={styles.socialIcons}>
            <a
              href="https://github.com/Sofiadfar"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/adfarhilal"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/SufiAdfar" target="_blank" rel="noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Sofi Adfar. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
