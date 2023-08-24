import React from "react";
import { Link } from "react-router-dom";
import MainCSS from "../css/Main.module.css";
import { motion } from "framer-motion";
import changeMetaTags from "../utils/changeMetaTags";
import { useEffect } from "react";
import { allPosts } from "../assets/posts";
const MainPage = () => {
  const numberOPosts = 3;
  const lastPosts = allPosts.slice(-numberOPosts);
  useEffect(() => {
    changeMetaTags({ title: "Anasayfa" });
  }, []);
  return (
    <>
      <main>
        {lastPosts.map((post) => {
          return (
            <motion.article
              className={MainCSS.article}
              key={post.id}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className={MainCSS.postImage}>
                <img src={post.paylasimResmi} alt="React logosu" />
              </div>
              <div className={MainCSS.date}>
                <div>{post.tarih}</div>
                <div className={MainCSS.tag}>{post.etiket}</div>
              </div>
              <h1>{post.baslik}</h1>
              <p>{post.metin.substring(0, 400)}...</p>
              <div className={MainCSS.bottomContent}>
                <div className={MainCSS.writer}>
                  <div className={MainCSS.writerImage}>
                    <img src={post.paylasanResmi} alt={post.paylasanAdi} />
                  </div>
                  <div className={MainCSS.writerInfo}>
                    <div>{post.paylasanAdi}</div>
                    <div>{post.paylasanUnvan}</div>
                  </div>
                </div>
                <div
                  style={{
                    opacity: "0.8",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Link to="Post" state={{ post }}>
                    Devamını gör
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </main>
    </>
  );
};

export default MainPage;
