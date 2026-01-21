import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ image, title, description, technologies, linkBtn }) {
  return (
    <div className={styles.projectCard}>
      <img className={styles.projectImage} src={image} alt={title} />
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.techStack}>
        {technologies.map((tech, index) => (
          <span key={index} className={styles.techBtn}>
            {tech}
          </span>
        ))}
      </div>
      <div className={styles.projectLinks}>
        {linkBtn.map((link, index) => (
          <button key={index} className={styles.linkBtn}>
            {link}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
