import React from "react";
import PostsCSS from "../css/Posts.module.css";
import { allPosts } from "../assets/posts";
import { useEffect, useState } from "react";
import Post from "../components/Post";
import { motion } from "framer-motion";
import Search from "../components/Search";
import changeMetaTags from "../utils/changeMetaTags";
const PostsPage = () => {
  const [posts, setPosts] = useState(allPosts);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  useEffect(() => {
    changeMetaTags({ title: "Paylaşımlar" });
  }, []);
  return (
    <>
      <Search
        posts={posts}
        filteredPosts={filteredPosts}
        setFilteredPosts={setFilteredPosts}
      />
      <motion.div
        layout
        className={PostsCSS.section}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        <div className={PostsCSS.container}>
          {filteredPosts.map((post) => {
            return <Post post={post} key={post.id} className={PostsCSS.post} />;
          })}
        </div>
      </motion.div>
    </>
  );
};

export default PostsPage;
