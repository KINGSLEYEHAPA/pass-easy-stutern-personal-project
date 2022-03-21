import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const News = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  console.log(width);
  return (
    <motion.div
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
      className="overflow-hidden cursor-grab min-w-full bg-yellow-500"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className=" bg-green-100 p-2 w-full flex gap-1 mt-2 px-2"
      >
        <div className="bg-gray-600 h-72 min-w-[20rem]   text-white">1</div>
        <div className="bg-gray-600 h-72 min-w-[20rem]  text-white">2</div>
        <div className="bg-gray-600 h-72 min-w-[20rem]  text-white">3</div>
        <div className="bg-gray-600 h-72 min-w-[20rem]  text-white">4</div>
        <div className="bg-gray-600 h-72 min-w-[20rem]  text-white">5</div>
        <div className="bg-gray-600 h-72 min-w-[20rem]  text-white">6</div>
        <div className="bg-gray-600 h-72 min-w-[20rem]  text-white">7</div>
        <div className="bg-gray-600 h-72 min-w-[20rem]  text-white">8</div>
      </motion.div>
    </motion.div>
  );
};

export default News;
