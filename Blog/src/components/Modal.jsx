import React, { useRef, useEffect, useState } from "react";
import ProjectsCSS from "../css/Projects.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const Modal = ({ image, images, onClose }) => {
  const swipeConfidenceThreshold = 10000;
  const [[page, direction], setPage] = useState([image, 1]);

  const imageIndex = wrap(0, images.length, page);
 
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  const modalRef = useRef();
useEffect(()=>{console.log(page,imageIndex);},[page,imageIndex])
useEffect(()=>{console.log(image);},[image])
  // Modal dışına tıklamalara yanıt vermek için bir event dinleyici ekleyin
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    // Event dinleyiciyi ekle
    document.addEventListener("mousedown", handleClickOutside);

    // Component çözüldüğünde event dinleyiciyi kaldırın
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, onClose]);
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };
  return (
    <div className={ProjectsCSS.modal}>
      <div ref={modalRef} className={ProjectsCSS.modalContent}>
        <div className={ProjectsCSS.modalContainer}>
          <div className={ProjectsCSS.exampleContainer}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={page} // imageIndex yerine page kullanın
                src={images[imageIndex]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              />
            </AnimatePresence>
            <div className={ProjectsCSS.next} onClick={() => paginate(1)}>
              {"‣"}
            </div>
            <div className={ProjectsCSS.prev} onClick={() => paginate(-1)}>
              {"‣"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;