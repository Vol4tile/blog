import React, { useEffect, useState } from "react";
import MainCSS from "../css/Main.module.css";
import { motion, useAnimation } from "framer-motion";
import changeMetaTags from "../utils/changeMetaTags";
import photo from "../assets/illustrator.jpg";
import { useRef } from "react";

import hljs from "highlight.js";
import { CiMail } from "react-icons/ci";
import { useTheme } from "../context/ThemeContext";

const MainPage = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [developerText, setDeveloperText] = useState("");
  const kodRef = useRef();

  const developerTextOptions = [
    "Computer Engineer",
    "Full Stack Developer",
    "Front End Developer",
    "Back End Developer",
  ];
  const [charIndex, setCharIndex] = useState(0);
  const [codeText, setCodeText] = useState("");
  const textToType = "Bana Ulaş";
  const [textIndex, setTextIndex] = useState(0);
  const imgControls = useAnimation(); // Resim için animasyon kontrolü
  const infoControls = useAnimation(); // Bilgi divi için animasyon kontrolü
  useEffect(() => {
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
    loadStyles();
  }, [isDarkMode]);
  useEffect(() => {
    changeMetaTags({ title: "Anasayfa" });
  }, []);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (textToType.length > codeText.length) {
        const nextChar = textToType[codeText.length];
        setCodeText((prevText) => prevText + nextChar);
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // 1 saniyede bir harf ekle
    return () => clearInterval(typingInterval);
  }, [codeText]);

  // Belirli bir süre sonra metni değiştir
  useEffect(() => {
    const currentText = developerTextOptions[textIndex];

  
    const typingInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        setDeveloperText((prevText) => prevText + currentText[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCharIndex(0);
          setTextIndex((prevTextIndex) => (prevTextIndex + 1) % developerTextOptions.length);
          setDeveloperText("");
        }, 1500);
      }
    }, 100);
  
    return () => clearInterval(typingInterval);
  }, [charIndex, textIndex]);
  useEffect(() => {
    const language = "html";
    const codeToHighlight = `
      <button className={styles.btn}>
       ${codeText}
      </button>
    `;

    const options = { language };

    const highlightedCode = hljs.highlight(codeToHighlight, options).value;

    kodRef.current.innerHTML = highlightedCode;
  }, [codeText]);
  const sendEmail = () => {
    window.location.href = "mailto:ilkanerdoganinfo@gmail.com";
  };
  return (
    <>
      <main className={isDarkMode ? MainCSS.darkMain : MainCSS.lightMain}>
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
              animate={imgControls}
            />
            <div className={MainCSS.info}>
              <motion.div className={MainCSS.name} animate={infoControls}>
                İlkan ERDOĞAN
              </motion.div>
              <div className={MainCSS.title}>{developerText}|</div>
            </div>
          </div>
          <div className={MainCSS.word}>"Her gün bir öncekine göre daha iyi bir versiyonu olmak için çaba göster. Küçük adımlarla büyük farklar yaratılır."</div>
          <div className={MainCSS.code}>
            <pre className={isDarkMode ? MainCSS.darkPre : MainCSS.lightPre}>
              <code
                className=" language-html "
                style={{ height: "300px", margin: "0", padding: "0" }}
                ref={kodRef}
              ></code>
            </pre>

            <div>
              <button className={MainCSS.btn} onClick={sendEmail}>
                <CiMail size={20} fill="white" />
                {codeText}
              </button>
            </div>
          </div>
        </motion.article>
      </main>
    </>
  );
};

export default MainPage;
