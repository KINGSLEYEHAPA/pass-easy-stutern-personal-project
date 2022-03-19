import React, { useEffect } from "react";
import Hero from "./Hero";
import jambLogo from "../assets/img/Jamb.jpg";
import waecLogo from "../assets/img/WAEC.webp";
import postUtme from "../assets/img/post-utme.jfif";
import dictionaryLogo from "../assets/img/dictionary.jfif";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomePage = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const featureVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <div className="bg-green-100/80  w-full min-h-100rem ">
      <Hero />
      <div className="w-full min-h-96 lg:h-[30rem] xl:h-64 py-2 px-0 lg:flex flex flex-wrap lg:flex-row gap-0 items-center justify-center  lg:justify-start xl:justify-center lg:pl-12 xl:pl-2">
        <motion.div
          variants={featureVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, type: "spring", stiffness: 120 }}
          className="bg-green-200/80 h-56 w-full ssm:w-[20.8rem] md:w-96 lg:h-56 lg:w-80 border-2 lg:border-r-2 border-gray-300/50 p-2 cursor-pointer"
        >
          <p className="h-14 p-1">
            <img className="h-full w-20 rounded-md" src={jambLogo} alt="Jamb" />{" "}
          </p>
          <div>
            <h2 className="text-xl text-green-700">Jamb Past Question</h2>
            <p className="mt-2 text-green-500">
              This Platform help you to prepare for jamb exams. It boast several
              past questions that help you to master..
            </p>
          </div>
          <Link to="/">
            <div className="flex justify-start items-center gap-2 mt-3 hover:gap-4">
              {" "}
              <p className="text-green-500 font-bold">Practice Now</p>{" "}
              <span className=" text-green-600 font-bold text-2xl ">
                <BsArrowRight />
              </span>
            </div>
          </Link>
        </motion.div>
        <motion.div
          variants={featureVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 120,
            delay: 0.4,
          }}
          className="bg-green-200/80 h-56 w-full ssm:w-[20.8rem] md:w-96 lg:h-56 lg:w-80 border-2   lg:border-r-2 border-gray-300/50 p-2 cursor-pointer"
        >
          <p className="h-14 p-1">
            <img className="h-full w-20 rounded-md" src={waecLogo} alt="Jamb" />{" "}
          </p>
          <div>
            <h2 className="text-xl text-green-700">Wassce Past Question</h2>
            <p className="mt-2 text-green-500">
              This Platform help you to prepare for Wassce exams. It boast
              several past questions that help you to master..
            </p>
          </div>
          <Link to="/">
            <div className="flex justify-start items-center gap-2 mt-3 hover:gap-4">
              {" "}
              <p className="text-green-500 font-bold">Practice Now</p>{" "}
              <span className=" text-green-600 font-bold text-2xl">
                <BsArrowRight />
              </span>
            </div>
          </Link>
        </motion.div>
        <motion.div
          variants={featureVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 120,
            delay: 0.8,
          }}
          className="bg-green-200/80 h-56 w-full ssm:w-[20.8rem] md:w-96 lg:h-56 lg:w-80 border-2  lg:border-r-2 border-gray-300/50 p-2 cursor-pointer"
        >
          <p className="h-14 p-1">
            <img className="h-full w-20 rounded-md" src={postUtme} alt="Jamb" />{" "}
          </p>
          <div>
            <h2 className="text-xl text-green-700">Post-Utme Past Question</h2>
            <p className="mt-2 text-green-500">
              This Platform help you to prepare for postUtme exams. It boast
              several past questions that help you to master..
            </p>
          </div>
          <Link to="/">
            <div className="flex justify-start items-center gap-2 mt-3 hover:gap-4">
              {" "}
              <p className="text-green-500 font-bold">Practice Now</p>{" "}
              <span className=" text-green-600 font-bold text-2xl">
                <BsArrowRight />
              </span>
            </div>
          </Link>
        </motion.div>
        <motion.div
          variants={featureVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 120,
            delay: 1.2,
          }}
          className="bg-green-200/80  h-56 w-full ssm:w-[20.8rem] md:w-96 lg:h-56 border-2 border-gray-300/50  lg:w-80 p-2 cursor-pointer"
        >
          <p className="h-14 p-1">
            <img
              className="h-full w-20 rounded-md"
              src={dictionaryLogo}
              alt="Jamb"
            />{" "}
          </p>
          <div>
            <h2 className="text-xl text-green-700">Dictionary</h2>
            <p className="mt-2 text-green-500">
              This Platform help you to prepare for exams.Be a master of
              words...
            </p>
          </div>
          <Link to="/">
            <div className="flex justify-start items-center gap-2 mt-9 hover:gap-4">
              {" "}
              <p className="text-green-500 font-bold">Practice Now</p>{" "}
              <span className=" text-green-600 font-bold text-2xl">
                <BsArrowRight />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
