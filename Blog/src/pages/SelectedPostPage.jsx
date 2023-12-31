import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SelectedPostPageCSS from "../css/SelectedPostPage.module.css";
import { allPosts } from "../assets/posts";
import parse from "html-react-parser";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";

const SelectedPostPage = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { id } = useParams();
  const post = allPosts.find((item) => item.id === parseInt(id));
 
  const loadStyles = () => {
    // Tema değişikliğine göre stil dosyalarını yükleyin
    const styleLink = document.getElementById("highlight-styles");
  
    const stylePath = isDarkMode ? "/github-dark.min.css" : "/github.min.css";
  
    if (styleLink) {
      styleLink.href = stylePath;
    } else {
      const newStyleLink = document.createElement("link");
      newStyleLink.rel = "stylesheet";
      newStyleLink.type = "text/css";
      newStyleLink.id = "highlight-styles";
      newStyleLink.href = stylePath;
      document.head.appendChild(newStyleLink);
    }
  };
  useEffect(()=>{
    loadStyles()
  },[isDarkMode])
  if (!post) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100% - 170px)",
          color: "white",
        }}
      >
        Yazı bulunamadı.
      </div>
    );
  }
  return (
    <div className={`${SelectedPostPageCSS.fullContainer} ${isDarkMode ? SelectedPostPageCSS.dark : SelectedPostPageCSS.light }`}>
    <motion.article
      className={`${isDarkMode ?  SelectedPostPageCSS.dark: SelectedPostPageCSS.light} ${SelectedPostPageCSS.article} `}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className={SelectedPostPageCSS.container}>
        <h1>{post.baslik}</h1>
        <div className={SelectedPostPageCSS.date}>
          <div className={SelectedPostPageCSS.tag}>{post.etiket}</div>
          <div>{post.tarih}</div>
        </div>
        <p>{parse(post.metin)}</p>
      </div>
    </motion.article></div>
  );
};

export default SelectedPostPage;
