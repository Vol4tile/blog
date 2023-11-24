import React from "react";
import AboutCSS from "../css/About.module.css";
import IlkanLogo from "../assets/ilkannobackg.png";
import { motion } from "framer-motion";
import changeMetaTags from "../utils/changeMetaTags";
import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
const AboutPage = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  useEffect(() => {
    changeMetaTags({ title: "Hakkımda" });
  }, []);
  return (
    <div className={`${AboutCSS.fullContainer} ${isDarkMode ? AboutCSS.darkContainer : AboutCSS.lightContainer }`}>
    <motion.div
      className={`${AboutCSS.container } `}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className={AboutCSS.innerContainer}>
        <div className={AboutCSS.cardContainer}>
          <img className={AboutCSS.round} src={IlkanLogo} alt="İlkan" />
          <h3>İlkan Erdoğan</h3>

          <p>Full Stack Developer</p>

          <div className={AboutCSS.skills}>
            <h6>Yetenekler</h6>
            <ul>
              <li>Node.js</li>
              <li>React.js</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>PHP</li>
              <li>Next.js</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
        <div className={AboutCSS.aboutContainer}>
          <p>
             Yaklaşık 5 yıldır yazılım alanında
            deneyim kazanmaktayım. Temmuz ayında Bilgisayar Mühendisi ünvanımı aldım. Başlangıçta C ile algoritmik becerilerimi
            geliştirdim ve ardından C# ile Windows Form uygulamalarıyla çalıştım.
            Full Stack geliştirmeye HTML, CSS ve JavaScript ile adım
            attım. İlk full stack projemi PHP ve JQuery kullanarak başarıyla
            tamamladım. Son 3 yıldır React ve Express ile çalışarak MERN Stack
            projelerine imza atıyorum. Günümüzde popülatitesini arttırmasıyla birlikte Next.js ve TailwindCSS i bilgilerime ekledim.
            Kendimi geliştirdiğim ana yazılım dili Javascript fakat farklı programlama yöntemlerine ve
            teknolojilerine göz atabilmek için Asp.Net Core ile backend geliştirmekteyim.
            İyi seviyede MySql,PostgreSql ve MongoDb bilmekteyim.
          </p>
        </div>
      </div>
    </motion.div></div>
  );
};

export default AboutPage;
