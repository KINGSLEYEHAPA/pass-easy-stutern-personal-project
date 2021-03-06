import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";
import perfLogo from "../assets/img/performance.jfif";
import MenuItem from "./MenuItem";
import { BsFillStarFill, BsTrophyFill } from "react-icons/bs";
import { BiTimer } from "react-icons/bi";
import { useSelector } from "react-redux";
import { formatTime } from "../utilities";

const PerformanceStats = () => {
  const [selected, setSelected] = useState(0);
  const statsTab = ["Best Quiz Time", "Best Score", "Rankings"];
  const performanceData = useSelector((state) => state.performance.quizResults);

  const bestScoreSort = [...performanceData].sort((a, b) => b.score - a.score);

  const bestTimeSort = [...performanceData].sort(
    (a, b) => a.duration - b.duration
  );

  return (
    <div className="mt-52 lg:mt-[8.5rem] bg-green-100 min-h-[30rem] w-full p-4">
      <div className="bg-green-300 h-full w-full rounded-xl p-2 flex flex-col gap-1">
        <div className="h-24 md:h-20 md:w-full bg-green-700 flex justify-between">
          <div className="w-56 h-full flex gap-2 justify-start items-start md:items-center mt-6 md:mt-0 px-2">
            <div className="w-10 h-10 relative">
              <img
                className="w-full h-full rounded"
                src={perfLogo}
                alt="performance-shot"
              />
              <div className="absolute top-0 left-0 w-full h-full z-20 bg-green-700/50"></div>
            </div>
            <h1 className="text-green-100 text-xl ssm:text-2xl">Performance</h1>
          </div>
          <div className=" h-full w-96 md:w-[40rem] flex justify-end items-center pr-6 ">
            <div className=" flex flex-col md:flex md:flex-row gap-1 md:gap-3 justify-end items-start">
              <AnimateSharedLayout>
                {statsTab.map((el, index) => {
                  return (
                    <MenuItem
                      text={el}
                      key={index}
                      selected={selected === index}
                      onClick={() => setSelected(index)}
                    />
                  );
                })}
              </AnimateSharedLayout>
            </div>
          </div>
        </div>
        <AnimatePresence exitBeforeEnter>
          {selected === 0 && (
            <motion.div
              initial={{ opacity: 0, x: -1000, scale: 0 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.5, type: "spring", stiffness: 120 }}
              exit={{
                x: -1000,
                scale: 0,
                opacity: 0,
                transition: { duration: 0.5 },
              }}
              className="bg-green-100 w-full h-[20.5rem] md:h-[22rem] flex flex-col md:flex md:flex-row items-center justify-center gap-2 md:gap-10 p-4"
            >
              <div className="flex gap-2 bg-white/30 shadow-lg w-full h-20 md:w-[22rem] md:h-full items-center justify-center">
                <h2 className="text-md md:text-lg xl:text-3xl text-green-500 capitalize">
                  {bestTimeSort?.[0]?.subject}
                </h2>{" "}
                <div className="flex items-center gap-1 pt-1 md:pt-1 xl:pt-2">
                  <span className="text-green-700 md:text-lg xl:text-xl ">
                    <BsFillStarFill />
                  </span>
                  <span className="text-green-700 md:text-lg xl:text-xl">
                    <BsFillStarFill />
                  </span>
                  <span className="text-green-700 md:text-lg xl:text-xl">
                    <BsFillStarFill />
                  </span>
                  <span className="text-green-700 md:text-lg xl:text-xl">
                    <BsFillStarFill />
                  </span>
                  <span className="text-green-700 md:text-lg xl:text-xl">
                    <BsFillStarFill />
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 bg-white/30 shadow-lg w-full h-24 md:w-[24rem] md:h-full items-center justify-center p-2">
                <h2 className="text-lg md:text-xl xl:text-3xl text-green-500 capitalize">
                  {bestTimeSort?.[0]?.examtype}-{bestTimeSort?.[0]?.year}
                </h2>

                <h2 className="text-md md:text-lg xl:text-2xl text-green-500">
                  Record Time:{" "}
                </h2>
                <h2 className="text-md md:text-md xl:text-xl text-green-700">
                  {formatTime(bestTimeSort?.[0]?.duration)}
                </h2>
              </div>
              <div className="flex flex-col gap-4 bg-white/30 shadow-lg w-full h-28  md:w-[20rem] lg:w-[26rem] md:h-full items-center justify-center">
                <span className="text-6xl text-green-700 lg:text-8xl">
                  <BiTimer />
                </span>
                <p className="text-green-500"> {bestTimeSort?.[0]?.date}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
          {selected === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -1000, scale: 0 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.5, type: "spring", stiffness: 120 }}
              exit={{
                x: -1000,
                scale: 0,
                opacity: 0,
                transition: { duration: 0.5 },
              }}
              className="bg-green-100 w-full h-[20.5rem] md:h-[22rem] flex flex-col md:flex md:flex-row items-center justify-center gap-2 md:gap-10 p-4"
            >
              <div className="flex gap-2 bg-white/30 shadow-lg w-full h-20 md:w-[22rem] md:h-full items-center justify-center">
                <h2 className="text-md md:text-lg xl:text-3xl text-green-500 capitalize">
                  {bestScoreSort?.[0]?.subject}
                </h2>{" "}
                <div className="flex items-center gap-1 pt-1 md:pt-1 xl:pt-2">
                  <span className="text-green-700 md:text-lg xl:text-xl ">
                    <BsFillStarFill />
                  </span>
                  <span className="text-green-700 md:text-lg xl:text-xl">
                    <BsFillStarFill />
                  </span>
                  <span className="text-green-700 md:text-lg xl:text-xl">
                    <BsFillStarFill />
                  </span>
                  <span className="text-green-700 md:text-lg xl:text-xl">
                    <BsFillStarFill />
                  </span>
                  <span className="text-green-700 md:text-lg xl:text-xl">
                    <BsFillStarFill />
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 bg-white/30 shadow-lg w-full h-24 md:w-[24rem] md:h-full items-center justify-center p-2 md:space-y-4">
                <h2 className="text-lg md:text-xl xl:text-3xl text-green-500 capitalize">
                  {bestScoreSort?.[0]?.examtype}-{bestScoreSort?.[0]?.year}
                </h2>
                <h2 className="text-md md:text-lg xl:text-2xl text-green-500">
                  Score
                </h2>
                <h2 className="text-lg md:text-3xl xl:text-6xl text-green-700">
                  {bestScoreSort?.[0]?.score}%
                </h2>
              </div>
              <div className="flex flex-col gap-4 bg-white/30 shadow-lg w-full h-28  md:w-[20rem] lg:w-[26rem] md:h-full items-center justify-center">
                <span className="text-6xl text-green-700 lg:text-8xl">
                  <BsTrophyFill />
                </span>
                <p className="text-green-500"> {bestScoreSort?.[0]?.date}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
          {selected === 2 && (
            <motion.div
              initial={{ opacity: 0, x: -1000, scale: 0 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 1.5,
                type: "spring",
                stiffness: 120,
              }}
              exit={{
                x: -1000,
                scale: 0,
                opacity: 0,
                transition: { duration: 0.5 },
              }}
              className="min-h-[30rem] flex flex-col gap-1 mt-1"
            >
              <div className=" text-sm md:text-lg h-16 w-full bg-green-500/50 text-white rounded-md flex justify-between items-center px-1 ssm:px-2 font-bold">
                <div className="flex justify-start items-center px-2 md:pl-6 ssm:w-1/5">
                  {" "}
                  <p>S/N</p>
                </div>
                <div className="flex justify-start items-center px-2  md:pl-6 ssm:w-1/5">
                  <p>Subject</p>
                </div>
                <div className="flex justify-start items-center px-2 md:pl-6 ssm:w-1/5">
                  {" "}
                  <p>Exam&Year</p>
                </div>
                <div className="flex justify-start items-center px-2 md:pl-6 ssm:w-1/5">
                  {" "}
                  <p>Score</p>
                </div>
                <div className="flex justify-start items-center px-2 md:pl-4 ssm:w-1/5">
                  <p>Comment</p>
                </div>
              </div>
              {bestScoreSort.map((score, i) => {
                return (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                      x: i % 2 === 0 ? 500 : -500,
                    }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                      duration: 1.25,
                      delay: i * 0.4,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className=" text-sm md:text-md h-16 w-full bg-green-100/50 text-green-700 rounded-md flex justify-between items-center ssm:px-2 px-1"
                    key={i}
                  >
                    <div className="flex justify-start items-center px-2 md:pl-6 ssm:w-1/5">
                      {" "}
                      <p>{i + 1}</p>
                    </div>
                    <div className="flex justify-start items-center px-2  md:pl-6 ssm:w-1/5 capitalize">
                      <p> {score?.subject}</p>
                    </div>
                    <div className="flex justify-start items-center px-2 md:pl-6 ssm:w-1/5">
                      {" "}
                      <p className="capitalize">
                        {score?.examtype}&{score?.year}
                      </p>
                    </div>
                    <div className="flex justify-start items-center px-2 md:pl-6 ssm:w-1/5">
                      {" "}
                      <p className="font-bold">{score?.score}%</p>
                    </div>
                    <div className="flex justify-start items-center px-2 md:pl-4 ssm:w-1/5">
                      <p>{score?.comment}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PerformanceStats;
