import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import perfLogo from "../assets/img/performance.jfif";
import MenuItem from "./MenuItem";
import { BsFillStarFill, BsTrophyFill } from "react-icons/bs";

const PerformanceStats = () => {
  const [selected, setSelected] = useState(0);
  const statsTab = ["Best Quiz Time", "Best Score", "Absolute Best"];
  return (
    <div className="mt-52 lg:mt-[8.5rem] bg-green-100 h-[30rem] w-full p-4">
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
            <div className=" flex flex-col md:flex md:flex-row gap-0 md:gap-2 justify-end items-start">
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
        <AnimatePresence>
          {selected === 0 && (
            <div className="bg-green-100 w-full h-[20.5rem] md:h-[22rem] flex flex-col md:flex md:flex-row items-center justify-center gap-2 md:gap-10 p-4">
              <div className="flex gap-2 bg-white/30 shadow-lg w-full h-20 md:w-[22rem] md:h-full items-center justify-center">
                <h2 className="text-md md:text-lg xl:text-3xl text-green-500">
                  Chemistry
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
              <div className="flex flex-col gap-2 bg-white/30 shadow-lg w-full h-20 md:w-[24rem] md:h-full items-center justify-center p-2">
                <h2 className="text-md md:text-lg xl:text-2xl text-green-500">
                  Record Time:{" "}
                </h2>
                <h2 className="text-md md:text-md xl:text-xl text-green-700">
                  4minutes 59seconds
                </h2>
              </div>
              <div className="flex gap-2 bg-white/30 shadow-lg w-full h-28  md:w-[18rem] lg:w-[26rem] md:h-full items-center justify-center">
                <span className="text-6xl text-green-500 lg:text-8xl">
                  <BsTrophyFill />
                </span>
              </div>
            </div>
          )}
          {selected === 1 && <div>The second section</div>}
          {selected === 2 && <div>The third section</div>}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PerformanceStats;
