import React from "react";
import { motion } from "framer-motion";
import PostCSS from "../css/Post.module.css";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  return (
    <>
      <motion.article
        className={PostCSS.article}
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        <div className={PostCSS.postImage}>
          <img src={post.paylasimResmi} alt="React logosu" />
        </div>
        <div className={PostCSS.date}>
          <div>{post.tarih}</div>
          <div className={PostCSS.tag}>{post.etiket}</div>
        </div>
        <h1>{post.baslik}</h1>
        <p>{post.metin.substring(0, 300)}</p>
        <div className={PostCSS.bottomContent}>
          <div className={PostCSS.writer}>
            <div className={PostCSS.writerImage}>
              <img src={post.paylasanResmi} alt="ilkanın resmi" />
            </div>
            <div className={PostCSS.writerInfo}>
              <div>{post.paylasanAdi}</div>
              <div>{post.paylasanUnvan}</div>
            </div>
          </div>
          <div
            style={{ opacity: "0.8", display: "flex", alignItems: "center" }}
          >
            <Link to={`/Post/` + post.id}>Devamını gör</Link>
          </div>
        </div>
      </motion.article>
    </>
  );
};

export default Post;
