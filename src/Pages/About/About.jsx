import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import logo from "../../assets/react.svg";
import logoIcsc from "../../assets/icsc.png";

function About() {
  const [expandedExperience, setExpandedExperience] = useState(null);

  const toggleExperience = (index) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.aboutContainer} id="about">
      {/* About my professional journey */}
      <motion.div
        className={styles.aboutSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className={styles.sectionTitle}>About</h2>
        <p className={styles.aboutText}>
          At the end of 2024, I started my journey as a software developer,
          focusing on building robust web applications as a Frontend developer.
          Since then, I've contributed to a range of projects—from enhancing app
          security to developing AI-powered solutions. With a Bachelor's degree
          in Information Technology, I'm now focused on building innovative SaaS
          products and refining my craft as a developer.
        </p>
      </motion.div>

      {/* Experience */}
      <div className={styles.experienceSection}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.experienceContainer}>
          {[
            {
              company: "InfoTech",
              role: "Frontend Developer",
              logo: logo,
              desc: [
                "Built responsive UI components using React.js",
                "Worked with HTML, CSS, JavaScript",
                "Assisted in debugging and improving UI performance",
                "Collaborated with backend developers on API integration",
                "Implemented responsive design principles",
                "Optimized application performance",
              ],
              duration: "Feb 2024 - Present",
            },
            {
              company: "ECH",
              role: "MERN Stack Developer",
              logo: logo,
              desc: [
                "Developed full-stack applications using MERN stack",
                "Built RESTful APIs with Node.js and Express",
                "Designed and implemented MongoDB schemas",
                "Created responsive frontend interfaces with React",
                "Implemented user authentication and authorization",
                "Deployed applications to cloud platforms",
              ],
              duration: "Feb 2025 - Present",
            },
          ].map((exp, index) => (
            <motion.div
              key={index}
              className={`${styles.experienceItem} ${expandedExperience === index ? styles.active : ""}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={styles.experienceLeft}>
                <img
                  className={styles.companyLogo}
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                />
                <h3 className={styles.companyName}>{exp.company}</h3>
                <h4 className={styles.role}>{exp.role}</h4>
                <button
                  onClick={() => toggleExperience(index)}
                  aria-label="Toggle experience details"
                >
                  {expandedExperience === index ? "▼" : "▶"}
                </button>
                <p className={styles.experienceDesc}>
                  {expandedExperience === index &&
                    exp.desc.map((d, i) => (
                      <span key={i}>
                        • {d}
                        <br />
                      </span>
                    ))}
                </p>
              </div>
              <div className={styles.experienceRight}>
                <span className={styles.duration}>{exp.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className={styles.educationSection}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <motion.div
          className={styles.educationItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          transition={{ duration: 0.6 }}
        >
          <a
            className={styles.educationLink}
            href="http://islamiacollege.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.educationLeft}>
              <img
                className={styles.educationLogo}
                src={logoIcsc}
                alt="College Logo"
              />
              <div>
                <h3 className={styles.instituteName}>
                  Islamia College of Science and Commerce
                </h3>
                <p className={styles.degree}>
                  Bachelor's in Information Technology
                </p>
              </div>
            </div>
          </a>
          <div className={styles.educationRight}>
            <span className={styles.duration}>2020 - 2024</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
