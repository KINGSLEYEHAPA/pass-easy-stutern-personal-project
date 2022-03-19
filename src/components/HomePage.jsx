import React from "react";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <div className="bg-green-100/80  w-full min-h-100rem ">
      <Hero />
      <div className="w-full min-h-96 lg:h-[30rem] xl:h-64 p-2 lg:flex flex flex-wrap lg:flex-row gap-2 items-center justify-center  lg:justify-start lg:pl-24 xl:pl-2">
        <div className="bg-red-800/80 h-56 w-full ssm:w-[20.8rem] md:w-96 lg:h-56 lg:w-80 lg:border-r-2 border-gray-300/50"></div>
        <div className="bg-red-800/80 h-56 w-full ssm:w-[20.8rem] md:w-96 lg:h-56 lg:w-80  lg:border-r-2 border-gray-300/50"></div>
        <div className="bg-red-800/80 h-56 w-full ssm:w-[20.8rem] md:w-96 lg:h-56 lg:w-80  lg:border-r-2 border-gray-300/50"></div>
        <div className="bg-red-800/80  h-56 w-full ssm:w-[20.8rem] md:w-96 lg:h-56 lg:w-80"></div>
      </div>
    </div>
  );
};

export default HomePage;
