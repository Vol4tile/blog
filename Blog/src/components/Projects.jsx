import React, { useState } from "react";
import ProjectsCSS from "../css/Projects.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdFolder } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { wrap } from "popmotion";
import Modal from "./Modal"; // Modal bileşenini içe aktarın
const Project = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
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
      {/* <div className={ProjectsCSS.container}>
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
            </div>*/}
      <div className={ProjectsCSS.projectInfo}>
        <div className={ProjectsCSS.titles}>
          <div className={ProjectsCSS.name}>
            <IoMdFolder fill="rgb(20, 141, 141" /> <h2>{project.name}</h2>
          </div>
          <a href={project.githubLink} target="_blank">
            {" "}
            <AiFillGithub fill="rgb(20, 141, 141" />
          </a>
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
        </div>
        <div className={ProjectsCSS.images}>
          {project.images.map((image,key)=>{
            return(
              <img src={image} key={key} alt=""   onClick={() => openModal(image)} />
            )
          })}
        </div>
      </div>
      {selectedImage && (
        <Modal image={selectedImage}  onClose={closeModal} />
      )}
    </div>
  );
};

export default Project;
