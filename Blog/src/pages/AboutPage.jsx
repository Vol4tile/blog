import React from "react";
import AboutCSS from "../css/About.module.css";
import IlkanLogo from "../assets/ilkanErdogan.png";
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
    <motion.div
      className={`${AboutCSS.container } ${isDarkMode ? AboutCSS.darkContainer : AboutCSS.lightContainer }`}
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
              <li>Javascript</li>
              <li>TypeScript</li>
              <li>Php</li>
              <li>Next.js</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
        <div className={AboutCSS.aboutContainer}>
          <p>
            Yakın zamanda Bilgisayar Mühendisi olarak Zonguldak Bülent Ecevit
            Üniversitesi'nden mezun oldum ve yaklaşık 5 yıldır yazılım alanında
            deneyim kazanmaktayım. Başlangıçta C ile algoritmik becerilerimi
            geliştirdim ve ardından C# ile Windows Form uygulamalarına
            odaklandım. Full Stack geliştirmeye HTML, CSS ve JavaScript ile adım
            attım. İlk full stack projemi PHP ve JQuery kullanarak başarıyla
            tamamladım. Son 3 yıldır React ve Express ile çalışarak MERN Stack
            projelerine imza atıyorum. Şu anda Next ve TypeScript yeteneklerimi
            geliştirmeye odaklanmaktayım. Ayrıca, Python ile yapay zeka
            projeleri üzerinde çalıştım ve yazılım becerilerimi her geçen gün
            artırmak için çaba harcadım. Web geliştirme alanında özellikle ilgi
            duyduğum için genellikle MongoDB, MySQL, PostgreSQL ve SQLite gibi
            veritabanlarıyla MERN Stack projeleri geliştirmekteyim. Yeniliklere
            ve sürekli öğrenmeye açık bir yaklaşım benimsiyorum.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
