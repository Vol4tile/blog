import React, { useState } from "react";
import ProjectsCSS from "../css/Projects.module.css";

import { IoMdFolder } from "react-icons/io";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";

import Modal from "./Modal"; // Modal bileşenini içe aktarın
const Project = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState(-1);
  const [selectedImages, setSelectedImages] = useState(null);
  const openModal = (key, images) => {
    setSelectedImage(key);
    setSelectedImages(images);
  };

  const closeModal = () => {
    setSelectedImage(-1);
    setSelectedImages(null);
  };

  return (
    <div className={ProjectsCSS.innerPage}>
      <div className={ProjectsCSS.projectInfo}>
        <div className={ProjectsCSS.titles}>
          <div className={ProjectsCSS.name}>
            <IoMdFolder fill="rgb(20, 141, 141" /> <h2>{project.name}</h2>
          </div>
          {project.githubLink && (
            <a href={project.githubLink} target="_blank">
              {" "}
              <AiFillGithub fill="rgb(20, 141, 141" />
            </a>
          )}
          {project.siteLink && (
            <a href={project.siteLink} target="_blank">
              {" "}
              <AiOutlineGlobal fill="rgb(20, 141, 141" />
            </a>
          )}
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
          {project.images.map((image, key) => {
            return (
              <img
                src={image}
                key={key}
                alt=""
                onClick={() => openModal(key, project.images)}
              />
            );
          })}
        </div>
      </div>
      {selectedImage >= 0 && (
        <Modal
          image={selectedImage}
          images={selectedImages}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Project;
