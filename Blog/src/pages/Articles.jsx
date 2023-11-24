import React from "react";
import styles from "../css/Articles.module.css";
import { allPosts } from "../assets/posts";
import { useEffect, useState } from "react";
import Post from "../components/Post";
import { motion } from "framer-motion";
import Search from "../components/Search";
import changeMetaTags from "../utils/changeMetaTags";
import { useTheme } from "../context/ThemeContext";
const Articles = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [posts, setPosts] = useState(allPosts);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  useEffect(() => {
    changeMetaTags({ title: "Paylaşımlar" });
  }, []);
  return (
    <div
      className={`${styles.fullContainer} ${
        isDarkMode ? styles.dark : styles.light
      }`}
    >
      <motion.div
        layout
        className={`${styles.section} `}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        <Search
          posts={posts}
          filteredPosts={filteredPosts}
          setFilteredPosts={setFilteredPosts}
        />
        <div className={styles.container}>
          {filteredPosts.map((post) => {
            return <Post post={post} key={post.id} className={styles.post} />;
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Articles;
