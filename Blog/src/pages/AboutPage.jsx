import React from "react";
import AboutCSS from "../css/About.module.css";
import IlkanLogo from "../assets/ilkanErdogan.png";
import { motion } from "framer-motion";
import changeMetaTags from "../utils/changeMetaTags";
import { useEffect } from "react";
const AboutPage = () => {
  useEffect(() => {
    changeMetaTags({ title: "Hakkımda" });
  }, []);
  return (
    <motion.div
      className={AboutCSS.container}
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
            Merhaba ben İlkan. Zonguldak Bülent Ecevit Üniversitesi Bilgisayar
            Mühendisliği bölümünden mezunum. Yaklaşık 4 senedir yazılımla
            ilgilenmekteyim. Yazılıma c ile başlayarak algoritma becerilerimi
            geliştirdim. Devamında ise C# ile windows form uygulamalarıyla
            ilgilendim. Full Stack geliştirmeye ilk olarak Html Css javascript
            öğrenerek başladım Ardında Php ve Jquery ile ilk full stack projemi
            geliştirdim. Yaklaşık 2 senedir React ve Express ile geliştirmeler
            yapmaktayım. Şuanda Next ve TypeScript yeteneklerimi geliştirmeye
            çalışıyorum. Bir süre python ile yapay zeka projeleriyle uğraştım.
            Her geçen gün kendini yazılım alanında geliştirmeye çalışıyorum.
            Yazılımda en çok ilgi duyduğum ve kendini geliştirdim alan web
            geliştirmedir. Database olarak MongoDb,MySql,PostgreSql ve sqLite
            kullanıyorum. Genellikle MERN Stack geliştirme yaptığım için MongoDb
            Bulut sistemine hakimim.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
