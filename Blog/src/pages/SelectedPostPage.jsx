import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import MainCSS from "../css/Main.module.css";
import SelectedPostPageCSS from "../css/SelectedPostPage.module.css";
import { allPosts } from "../assets/posts";
const SelectedPostPage = () => {
  const { postId } = useParams();
  const post = allPosts.find((item) => 
    (item.id) === parseInt(postId)
  );
  console.log(post.paylasimResmi);
  if (!post) {
    // Eğer yazı bulunamazsa, uygun bir işlem yapabilirsiniz
    return <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"calc(100% - 170px)",color:"white"}}>Yazı bulunamadı.</div>;
  }
  return (
    <motion.article
      className={SelectedPostPageCSS.article}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className={SelectedPostPageCSS.container}>
        <div className={SelectedPostPageCSS.postImage}>
          <img src={`/${post.paylasimResmi}`} alt="React logosu" />
        </div>
        <div className={SelectedPostPageCSS.date}>
          <div>{post.tarih}</div>
          <div className={SelectedPostPageCSS.tag}>{post.etiket}</div>
        </div>
        <h1>{post.baslik}</h1>
        <p>{post.metin}</p>
        <div className={SelectedPostPageCSS.bottomContent}>
          <div className={SelectedPostPageCSS.writer}>
            <div className={SelectedPostPageCSS.writerImage}>
              <img  src={`/${post.paylasanResmi}`}  alt={post.paylasanAdi} />
            </div>
            <div className={SelectedPostPageCSS.writerInfo}>
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
          ></div>
         
        </div>
      </div>
    </motion.article>
  );
};

export default SelectedPostPage;
