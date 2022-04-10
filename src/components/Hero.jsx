import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mainImage from "../assets/img/waec-exam-nigeria1.jpg";
import mainImage_two from "../assets/img/image1.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [changeImage, setChangeImage] = useState(true);
  const heroImageVariants = {
    hidden: { opacity: 0, x: -500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
      },
    },
    exit: {
      x: 1000,
      opacity: 0,
      transition: {
        duration: 0.35,
      },
    },
  };
  useEffect(() => {
    setTimeout(() => {
      setChangeImage(!changeImage);
    }, 8000);
  }, [changeImage]);
  return (
    <div className="w-full h-96 ssm:h-[28rem] md:h-[40rem] lg:h-[45rem] mt-52 lg:mt-[8.5rem]">
      <AnimatePresence>
        <div className="h-full w-full bg-black relative overflow-hidden">
          <motion.img
            variants={heroImageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full h-full object-fill"
            src={changeImage ? mainImage : mainImage_two}
            alt="MainPhoto"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-white/30 z-10 flex justify-start pl-12 items-center ">
            <div className="w-80 sm:w-[30rem] ssm:w-[34rem] md:w-[40rem] lg:w-[50rem]  md:mb-12 bg-gray-700/25 px-2 py-1 sm:px-4 sm:py-4 ssm:p-6">
              <h4 className="text-xs text-green-300 font-bold ssm:text-md lg:text-lg">
                GET STARTED WITH UP TO SEVENTEEN SUBJECTS
              </h4>
              <h1 className="text-lg text-white ssm:text-2xl md:text-3xl lg:text-5xl">
                BEST ONLINE EXAM PREPARATION PLATFORM
              </h1>
              <p className="mt-6 text-green-300 ssm:text-md  lg:text-xl ">
                Pass Easy.The sure Platform to prepare for Exams in Wassce,Utme
                and Postume. This Online Educational Platform is a Nigerian
                Student Companion.
              </p>
              <Link to="/quiz">
                <button className="border-green-500 border-2 px-4 py-2 mt-5 text-white text-lg md:text-xl hover:bg-green-500">
                  Get Prepared{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </AnimatePresence>
      <div></div>
    </div>
  );
};

export default Hero;
