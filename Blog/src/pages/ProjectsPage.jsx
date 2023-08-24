import React from "react";
import { projects } from "../assets/projects";
import Project from "../components/Projects";
import ProjectsCSS from "../css/Projects.module.css";
import { motion } from "framer-motion";
const ProjectsPage = () => {
  console.log(projects);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className={ProjectsCSS.page}
    >
      {projects.map((project) => {
        return <Project project={project} key={project.id} />;
      })}
    </motion.div>
  );
};

export default ProjectsPage;
