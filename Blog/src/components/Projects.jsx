import React, { useState } from "react";
import ProjectsCSS from "../css/Projects.module.css";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoGithub,
} from "react-icons/bi";

import { AiOutlineGlobal } from "react-icons/ai";
import { FaNpm } from "react-icons/fa";
import Modal from "./Modal";
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
            {project.isTS && <BiLogoTypescript fill="#007acc" />}{" "}
            {project.isJS && <BiLogoJavascript fill="#ceba38" />}{" "}
            <h2>{project.name}</h2>
          </div>
          <span className={ProjectsCSS.links}>
            {project.npmLink && (
              <a href={project.npmLink} target="_blank">
                {" "}
                <FaNpm fill="rgb(20, 141, 141" />
              </a>
            )}
            {project.siteLink && (
              <a href={project.siteLink} target="_blank">
                {" "}
                <AiOutlineGlobal fill="rgb(20, 141, 141" />
              </a>
            )}{" "}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank">
                {" "}
                <BiLogoGithub fill="rgb(20, 141, 141" />
              </a>
            )}
          </span>
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
