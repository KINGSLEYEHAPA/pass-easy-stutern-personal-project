import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mainImage from "../assets/img/waec-exam-nigeria1.jpg";
import mainImage_two from "../assets/img/image1.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [changeImage, setChangeImage] = useState(true);
  const heroImageVariants = {
    hidden: { opacity: 0, x: -500, scale: 1 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 2,
      },
    },
    exit: {
      x: 1000,
      scale: 1.2,
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
  };
  useEffect(() => {
    setTimeout(() => {
      setChangeImage(!changeImage);
    }, 7000);
  }, [changeImage]);
  return (
    <div className="w-full h-96 ssm:h-[28rem] md:h-[40rem] lg:h-[55rem]">
      <div className="h-full w-full bg-green-100/50 relative">
        <AnimatePresence>
          <motion.img
            variants={heroImageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full h-full"
            src={changeImage ? mainImage : mainImage_two}
            alt="MainPhoto"
          />
        </AnimatePresence>
        <div className="absolute top-0 left-0 w-full h-full bg-white/30 z-10 flex justify-start pl-12 items-center">
          <div className="w-72 sm:w-80 ssm:w-96 md:w-[30rem] lg:w-[50rem] px-0">
            <h4 className="text-xs text-green-800 font-bold ssm:text-md lg:text-lg">
              GET STARTED WITH UP TO SEVENTEEN SUBJECTS
            </h4>
            <h1 className="text-lg text-white ssm:text-2xl md:text-4xl lg:text-7xl">
              BEST ONLINE EXAM PREPARATION PLATFORM
            </h1>
            <p className="mt-6 text-green-300 ssm:text-lg  lg:text-2xl ">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium
            </p>
            <Link to="/">
              <button className="border-green-500 border-2 px-4 py-2 mt-5 text-white text-lg md:text-xl hover:bg-green-500">
                Get Prepared{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
