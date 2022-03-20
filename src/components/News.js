import React from "react";
import { motion } from "framer-motion";

const News = () => {
  return (
    <motion.div className="overflow-hidden">
      <motion.div className=" bg-green-100 p-2 w-full flex gap-1 mt-5">
        <div className="bg-gray-600 h-72 w-80 "></div>
        <div className="bg-gray-600 h-72 w-80"></div>
        <div className="bg-gray-600 h-72 w-80"></div>
        <div className="bg-gray-600 h-72 w-80"></div>
      </motion.div>
    </motion.div>
  );
};

export default News;
