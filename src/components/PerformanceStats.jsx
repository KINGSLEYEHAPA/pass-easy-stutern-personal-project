import { AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import perfLogo from "../assets/img/performance.jfif";
import MenuItem from "./MenuItem";

const PerformanceStats = () => {
  const [selected, setSelected] = useState(0);
  const statsTab = ["Best Quiz Time", "Best Score", "Absolute Best"];
  return (
    <div className="mt-52 lg:mt-[8.5rem] bg-green-100 h-[30rem] w-full p-4">
      <div className="bg-green-300 h-full w-full">
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
          <div className=" h-full w-96 md:w-[40rem] flex justify-end items-center pr-6">
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
      </div>
    </div>
  );
};

export default PerformanceStats;
