import React from "react";
import { Link } from "react-router-dom";
import mainImage from "../assets/img/waec-exam-nigeria1.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full h-96 ssm:h-[28rem] md:h-[40rem] lg:h-[55rem]">
      <div className="h-full w-full bg-gray-300 relative">
        <motion.img className="w-full h-full" src={mainImage} alt="MainPhoto" />
        <div className="absolute top-0 left-0 w-full h-full bg-white/20 z-10 flex justify-center items-center">
          <div className="w-72 ssm:w-96 md:w-[30rem] lg:w-[50rem] px-0">
            <h4 className="text-xs text-green-800 font-bold ssm:text-md lg:text-lg">
              GET STARTED WITH UP TO SEVENTEEN SUBJECTS
            </h4>
            <h1 className="text-lg text-white ssm:text-2xl md:text-4xl lg:text-7xl">
              BEST ONLINE EXAM PREPARATION SYSTEM
            </h1>
            <p className="mt-6 text-green-300 ssm:text-lg  lg:text-2xl ">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium
            </p>
            <Link to="/">
              <button className="border-green-500 border-2 px-2 py-1 mt-5 text-white text-lg md:text-xl hover:bg-green-500">
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
