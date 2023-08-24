import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import MainCSS from "../css/Main.module.css";
import SelectedPostPageCSS from "../css/SelectedPostPage.module.css";
const SelectedPostPage = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <motion.article
      className={SelectedPostPageCSS.article}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className={SelectedPostPageCSS.container}>
        <div className={SelectedPostPageCSS.postImage}>
          <img src={state.post.paylasimResmi} alt="React logosu" />
        </div>
        <div className={SelectedPostPageCSS.date}>
          <div>{state.post.tarih}</div>
          <div className={SelectedPostPageCSS.tag}>{state.post.etiket}</div>
        </div>
        <h1>{state.post.baslik}</h1>
        <p>{state.post.metin}</p>
        <div className={SelectedPostPageCSS.bottomContent}>
          <div className={SelectedPostPageCSS.writer}>
            <div className={SelectedPostPageCSS.writerImage}>
              <img
                src={state.post.paylasanResmi}
                alt={state.post.paylasanAdi}
              />
            </div>
            <div className={SelectedPostPageCSS.writerInfo}>
              <div>{state.post.paylasanAdi}</div>
              <div>{state.post.paylasanUnvan}</div>
            </div>
          </div>
          <div
            style={{
              opacity: "0.8",
              display: "flex",
              alignItems: "center",
            }}
          ></div>
          <div>
            <a href="">
              {" "}
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default SelectedPostPage;
