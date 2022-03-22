import React, { useEffect } from "react";
import Hero from "./Hero";
import jambLogo from "../assets/img/Jamb.jpg";
import waecLogo from "../assets/img/WAEC.webp";
import postUtme from "../assets/img/post-utme.jfif";
import dictionaryLogo from "../assets/img/dictionary.jfif";
import pastQuestions from "../assets/img/pastquestions.jpg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import News from "./News";

const HomePage = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
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
      <motion.div
        ref={ref}
        className="w-full min-h-96 lg:h-[30rem] xl:h-64 py-2 px-0 lg:flex flex flex-wrap lg:flex-row gap-0 items-center justify-center  lg:justify-start xl:justify-center lg:pl-12 xl:pl-2 mb-16"
      >
        <motion.div
          variants={featureVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 120,
            delay: 0.2,
          }}
          className="bg-green-200/80 hover:bg-white h-56 w-full ssm:w-[20.8rem] md:w-96 lg:h-56 lg:w-80 border-2 lg:border-r-2 border-gray-300/50 p-2 cursor-pointer"
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
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 120,
            delay: 0.4,
          }}
          className="bg-green-200/80 hover:bg-white h-56 w-full ssm:w-[20.8rem] md:w-96 lg:h-56 lg:w-80 border-2   lg:border-r-2 border-gray-300/50 p-2 cursor-pointer"
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
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 120,
            delay: 0.8,
          }}
          className="bg-green-200/80 hover:bg-white h-56 w-full ssm:w-[20.8rem] md:w-96 lg:h-56 lg:w-80 border-2  lg:border-r-2 border-gray-300/50 p-2 cursor-pointer"
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
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 120,
            delay: 1.2,
          }}
          className="bg-green-200/80 hover:bg-white  h-56 w-full ssm:w-[20.8rem] md:w-96 lg:h-56 border-2 border-gray-300/50  lg:w-80 p-2 cursor-pointer"
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
      </motion.div>

      <div className="h-[40rem] ssm:h-[30rem] w-full flex flex-col border-b-2 border-green-100">
        <div className="h-14 bg-green-200/40 flex justify-start items-center">
          <h2 className="text-2xl md:text-4xl text-green-500 ml-4">
            Learn a New Word
          </h2>
        </div>
        <div className="flex h-full  ">
          <div className="bg-green-500 w-1/2 ssm:w-1/3 h-full p-4 flex flex-col justify-start items-start">
            <motion.span
              variants={featureVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 2, type: "spring", stiffness: 120 }}
              className="text-2xl text-green-100"
            >
              {" "}
              Annoy- <span className="text-2xl">/əˈnɔɪ/</span>
            </motion.span>

            <div className="mt-4 text-white text-sm">
              <p className="text-xl text-green-700">Synonyms</p>
              <p>Bother</p>
              <p>Bug</p>
              <p className="text-xl text-green-700">Antonyms</p>
              <p>Please</p>
            </div>
          </div>
          <div className="bg-green-500 w-1/2 ssm:w-2/3 h-full p-2">
            <div className="py-4">
              <span className="bg-white text-green-500 px-2 py-1 rounded-sm font-bold ">
                Noun
              </span>
              <p className="text-md ssm:text-xl text-white mt-4">
                Definition:{" "}
                <span className="text-sm ssm:text-lg text-white">
                  A feeling of discomfort or vexation caused by what one
                  dislikes.
                </span>
              </p>
              <p className="text-green-700 text-md ssm:text-xl mt-2">
                Example:{" "}
                <span className="text-white text-sm ssm:text-lg">
                  He is annoy
                </span>
              </p>
            </div>
            <div className="py-4">
              <span className="bg-white text-green-500 px-2 py-1 rounded-sm font-bold ">
                Verb
              </span>
              <p className="text-md ssm:text-xl text-white mt-4">
                Definition:{" "}
                <span className="text-sm ssm:text-lg text-white">
                  To disturb or irritate, especially by continued or repeated
                  acts; to bother with unpleasant deeds.
                </span>
              </p>
              <p className="text-green-700 text-md ssm:text-xl mt-2">
                Example:{" "}
                <span className="text-white text-sm ssm:text-lg">
                  Marc loved his sister, but when she annoyed him he wanted to
                  switch her off.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <News />
      <div className="flex flex-col h-[60rem] sm:h-[55rem] ssm:h-[35rem] ssm:flex ssm:flex-row  bg-gray-100 mt-8">
        <aside className=" h-2/3 ssm:h-full sm:h-[25rem] ssm:w-1/2  flex flex-col p-4 ">
          <div className="p-4">
            <h2 className="text-3xl md:text-5xl text-green-500">
              About PassEasy
            </h2>
            <p className="text-sm ssm:text-lg text-green-700 mt-5">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-28 p-4">
              <div className="w-56 space-y-2">
                {" "}
                <p className="text-4xl text-green-500">50M+</p>{" "}
                <p className="text-md text-gray-500">STUDENTS LEARNING</p>
              </div>
              <div className="w-56 space-y-2">
                {" "}
                <p className="text-4xl text-green-500">16+</p>{" "}
                <p className="text-md text-gray-500">SUBJECTS</p>
              </div>
            </div>
            <div className="flex gap-28 p-4">
              <div className="w-56 space-y-2">
                {" "}
                <p className="text-4xl text-green-500">6K+</p>{" "}
                <p className="text-md text-gray-500">QUESTIONS</p>
              </div>
              <div className="w-56 space-y-2">
                {" "}
                <p className="text-4xl text-green-500">1M+</p>{" "}
                <p className="text-md text-gray-500">MONTHLY VISIT</p>
              </div>
            </div>
          </div>
        </aside>
        <aside className=" h-[18rem] sm:h-[35rem] ssm:h-full ssm:w-1/2">
          <img
            className="w-full h-full ssm:h-[21rem] lg:h-4/5 shadow-xl rounded-xl"
            src={pastQuestions}
            alt="Student"
          />
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
