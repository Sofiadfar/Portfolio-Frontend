import React from "react";
import styles from "./Home.module.css";
import logoImg from "../../assets/Adfar.jpeg";

function Home() {
  const handleContactClick = () => {
    // Scroll to contact section or open contact modal
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.homeContainer}>
      {/* Decorative floating elements */}
      <div className={styles.floatingElement}></div>
      <div className={styles.floatingElement}></div>
      <div className={styles.floatingElement}></div>

      <div className={styles.left}>
        <h2 className={styles.homeTitle}>
          Hi, I'm <span>Adfar Hilal Sofi</span> 👋
        </h2>
        <p className={styles.homeSubtitle}>
          <strong> Hi, I’m Sofi — a Frontend Developer</strong> with hands-on
          experience building responsive and scalable web applications using{" "}
          <strong>scalable solutions</strong> React, JavaScript, HTML, and CSS.
        </p>

        <button
          className={styles.ctaButton}
          onClick={handleContactClick}
          aria-label="Get in touch with Adfar"
        >
          Let's Build Together
        </button>
      </div>
      <div className={styles.right}>
        <img src={logoImg} alt="" />
      </div>
    </div>
  );
}

export default Home;
