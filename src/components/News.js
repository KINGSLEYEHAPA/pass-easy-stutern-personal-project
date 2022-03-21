import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      className="overflow-hidden cursor-grab min-w-full"
    >
      <h2 className="text-2xl md:text-4xl text-green-500 ml-4">News</h2>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className=" bg-green-100 p-2 w-full flex gap-1 mt-2 px-2"
      >
        <div className="bg-gray-100 h-72 min-w-[20rem] ">
          <img
            className="w-full h-2/3 pointer-events-none"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BsnxtyM161gr7oMXaII2SVx0qYLaO3siFw&usqp=CAU"
            alt="News"
          />
          <Link to="/news">
            <div className="flex flex-col justify-start items-center space-y-2 px-4">
              {" "}
              <h3 className="text-xl text-green-500">The Headline</h3>{" "}
              <p className="text-md text-green-800">
                l;ksfk lkdfsf jkfhs jhsfs jjfss kjsfdsj jksdfs jksfhfs jsff
                jkhsfsj jnbsfsh
              </p>
            </div>
          </Link>
        </div>
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
