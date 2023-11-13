import React,{useEffect} from "react";
import { motion } from "framer-motion";
import PostCSS from "../css/Post.module.css";
import { Link } from "react-router-dom";
import parse from "html-react-parser"
import hljs from "highlight.js";

import { useTheme } from "../context/ThemeContext";
const Post = ({ post }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  useEffect(() => {
    const loadStyles = () => {
      // Tema değişikliğine göre stil dosyalarını yükleyin
      const styleLink = document.getElementById("highlight-styles");

      if (styleLink) {
        styleLink.href = isDarkMode
          ? "../../node_modules/highlight.js/styles/github-dark.css"
          : "../../node_modules/highlight.js/styles/github.css";
      } else {
        const newStyleLink = document.createElement("link");
        newStyleLink.rel = "stylesheet";
        newStyleLink.type = "text/css";
        newStyleLink.id = "highlight-styles";
        newStyleLink.href = isDarkMode
          ? "../../node_modules/highlight.js/styles/github-dark.css"
          : "../../node_modules/highlight.js/styles/github.css";
        document.head.appendChild(newStyleLink);
      }
    };

    loadStyles();
  }, [isDarkMode]);
 
  return (
    <>
      <motion.article
        className={PostCSS.article}
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
          <h1>{post.baslik}</h1>
        <div className={PostCSS.date}>
       
          <div className={PostCSS.tag}>{post.etiket}</div>
          <div>{post.tarih}</div>
        </div>
     
        <p>{parse(post.metin)}</p>
        <Link to={`/article/${post.id}`}>Devamını gör</Link>
      </motion.article>
    </>
  );
};

export default Post;
