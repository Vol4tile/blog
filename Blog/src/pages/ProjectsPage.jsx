import React from "react";
import { projects } from "../assets/projects";
import Project from "../components/Projects";
import ProjectsCSS from "../css/Projects.module.css";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
const ProjectsPage = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  return (
 
<div className={` ${isDarkMode ? ProjectsCSS.darkPage : ProjectsCSS.lightPage} ${ProjectsCSS.page}`}>
    <motion.ul
    className={ProjectsCSS.container}  
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {projects.map((project) => (
      <motion.li key={project.id}  className={ProjectsCSS.item} variants={item}  ><Project project={project} /> </motion.li>
    ))}
  </motion.ul></div>
  );
};

export default ProjectsPage;
