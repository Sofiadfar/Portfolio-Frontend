import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

function Skills() {
  const skills = [
    {
      name: "React",
      description: "Frontend library for building user interfaces",
      color: "#61dafb",
      level: 80,
    },
    {
      name: "JavaScript",
      description: "Programming language for web development",
      color: "#f7df1e",
      level: 85,
    },
    {
      name: "HTML",
      description: "Markup language for creating web pages",
      color: "#e34f26",
      level: 99,
    },
    {
      name: "Git",
      description: "Version control system",
      color: "#f05032",
      level: 80,
    },
    {
      name: "RESTful APIs",
      description: "Architectural style for web services",
      color: "#f59e0b",
      level: 80,
    },
    {
      name: "CSS",
      description: "Styling language for web pages",
      color: "#2965f1",
      level: 95,
    },
    {
      name: "Framer Motion",
      description: "Animation library for React",
      color: "#ff0088",
      level: 80,
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      color: "#38bdf8",
      level: 90,
    },
    {
      name: "Bootstrap",
      description: "CSS framework for responsive design",
      color: "#7952b3",
      level: 88,
    },
    {
      name: "Material UI",
      description: "React component library",
      color: "#f43f5e",
      level: 80,
    },
    {
      name: "ANT Design",
      description: "Design system for enterprise applications",
      color: "#22d3ee",
      level: 75,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className={styles.skillsContainer} id="skills">
      <h2 className={styles.skillsTitle}>Technical Skills</h2>

      <motion.div
        className={styles.skillsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={styles.skillItem}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 20px ${skill.color}, 0 0 30px #fff`,
            }}
          >
            <div className={styles.skillHeader}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillPercent}>{skill.level}%</span>
            </div>
            <div className={styles.skillBar}>
              <motion.div
                className={styles.skillProgress}
                style={{
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              />
            </div>
            <p className={styles.skillDesc}>{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
