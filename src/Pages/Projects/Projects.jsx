import React from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import HotelImg from "../../assets/hotel.png";
import movieImg from "../../assets/movie.png";

function Projects() {
  const projectData = [
    {
      image: HotelImg,
      title: "Hotel Registration Application",
      description:
        "A real-time AI-powered chat application with authentication and responsive UI.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      linkBtn: ["GitHub"],
    },
    {
      image: movieImg,
      title: "Movie App",
      description:
        "A movie application that allows user to search movies and also selected to favorites.",
      technologies: ["React", "JavaScript", "CSS"],
      linkBtn: ["GitHub"],
    },
  ];

  return (
    <div className={styles.projectsContainer} id="projects">
      <h2 className={styles.projectsTitle}>Projects</h2>

      <div className={styles.projectsGrid}>
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
