import React, { useEffect, useState } from "react";
import MainCSS from "../css/Main.module.css";
import { motion, useAnimation } from "framer-motion";
import changeMetaTags from "../utils/changeMetaTags";
import photo from "../assets/ilkanErdogan.png";

const MainPage = () => {
  const [developerText, setDeveloperText] = useState("");
  const developerTextOptions = [
    "Full Stack Developer",
    "Front End Developer",
    "Back End Developer",
  ];
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const imgControls = useAnimation(); // Resim için animasyon kontrolü
  const infoControls = useAnimation(); // Bilgi divi için animasyon kontrolü

  useEffect(() => {
    changeMetaTags({ title: "Anasayfa" });
  }, []);

  // Belirli bir süre sonra metni değiştir
  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex <= developerTextOptions[textIndex].length) {
        setCharIndex((prevIndex) => prevIndex + 1);
        setDeveloperText((prevText) =>
          developerTextOptions[textIndex].substring(0, charIndex)
        );
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setTextIndex(
            (prevTextIndex) => (prevTextIndex + 1) % developerTextOptions.length
          );
          setDeveloperText("");
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [charIndex, textIndex]);

  return (
    <>
      <main>
        <motion.article
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className={MainCSS.article}
        >
          <div className={MainCSS.me}>
            <motion.img
              src={photo}
              alt="İlkan Erdoğan"
              className={MainCSS.img}
              animate={imgControls} // Resim için animasyon kontrolünü kullan
            />
            <div className={MainCSS.info}>
              <motion.div
                className={MainCSS.name}
                animate={infoControls} // Bilgi divi için animasyon kontrolünü kullan
              >
                İlkan ERDOĞAN
              </motion.div>
              <div className={MainCSS.title}>{developerText}|</div>
            </div>
          </div>
          <div></div>
        </motion.article>
      </main>
    </>
  );
};

export default MainPage;
