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
    <>
      <motion.div
        layout
        className={`${styles.section} ${
          isDarkMode ? styles.dark : styles.light
        }`}
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
    </>
  );
};

export default Articles;
