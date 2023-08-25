import React, { useState } from "react";
import ProjectsCSS from "../css/Projects.module.css";
import { motion, AnimatePresence } from "framer-motion";

import { wrap } from "popmotion";
const Project = ({ project }) => {
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };
  const swipeConfidenceThreshold = 10000;
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, project.images.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className={ProjectsCSS.innerPage}>
      <div className={ProjectsCSS.container}>
        <div className={ProjectsCSS.exampleContainer}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              src={project.images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          </AnimatePresence>
          <div className={ProjectsCSS.next} onClick={() => paginate(1)}>
            {"‣"}
          </div>
          <div className={ProjectsCSS.prev} onClick={() => paginate(-1)}>
            {"‣"}
          </div>
        </div>
      </div>
      <div className={ProjectsCSS.projectInfo}>
        <div className={ProjectsCSS.name}>
          <h1>{project.name}</h1>
        </div>
        <div className={ProjectsCSS.tags}>
          {project.languages.map((tag, key) => {
            return (
              <div className={ProjectsCSS.tag} key={key}>
                {tag}
              </div>
            );
          })}
        </div>
        <div>
          <p>{project.description}</p>
        </div>
        <div className={ProjectsCSS.date}>
          <span>{project.createDate}</span>

          <a href={project.githubLink} target="_blank">
            {" "}
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
