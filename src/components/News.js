import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const News = () => {
  const [width, setWidth] = useState(0);
  const latestNews = useSelector((state) => state.news.latestNews);

  const carousel = useRef(null);
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
      className="overflow-hidden cursor-grab min-w-full"
      id="news"
    >
      <h2 className="text-2xl md:text-4xl text-green-500 ml-4">News</h2>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className=" bg-green-100 p-2 w-full flex gap-2 mt-2 px-2"
      >
        {latestNews?.map((newsItem, index) => {
          return (
            <div
              className="bg-gray-100 h-72 min-w-[20rem] rounded-lg "
              key={index}
            >
              <img
                className="w-full h-2/3 rounded-tr-lg rounded-tl-lg pointer-events-none  "
                src={
                  newsItem?.media
                    ? newsItem?.media
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BsnxtyM161gr7oMXaII2SVx0qYLaO3siFw&usqp=CAU"
                }
                alt="News"
              />
              <Link to={`/news/${newsItem.title}`}>
                <div className="flex flex-col justify-center items-center  px-2 bg-green-500 h-1/3 ">
                  {" "}
                  <h3 className=" text-md ssm:text-lg text-white pointer-events-auto">
                    {newsItem?.title
                      ? newsItem?.title.slice(0, 80)
                      : "ASUU and travails of Nigerian education"}
                  </h3>{" "}
                </div>
              </Link>
            </div>
          );
        })}
        {/* <div className="bg-gray-600 h-72 min-w-[20rem]  text-white">2</div>
        <div className="bg-gray-600 h-72 min-w-[20rem]  text-white">3</div>
        <div className="bg-gray-600 h-72 min-w-[20rem]  text-white">4</div>
        <div className="bg-gray-600 h-72 min-w-[20rem]  text-white">5</div>
        <div className="bg-gray-600 h-72 min-w-[20rem]  text-white">6</div>
        <div className="bg-gray-600 h-72 min-w-[20rem]  text-white">7</div>
        <div className="bg-gray-600 h-72 min-w-[20rem]  text-white">8</div> */}
      </motion.div>
    </motion.div>
  );
};

export default News;
