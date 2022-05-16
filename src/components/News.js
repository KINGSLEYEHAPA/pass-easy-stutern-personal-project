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
      className="min-w-full overflow-hidden cursor-grab"
      id="news"
    >
      <h2 className="ml-4 text-2xl text-green-500 md:text-4xl">News</h2>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex w-full gap-2 p-2 px-2 mt-2 bg-green-100 "
      >
        {latestNews?.map((newsItem, index) => {
          return (
            <div
              className="bg-gray-100 h-72 min-w-[20rem] rounded-lg "
              key={index}
            >
              <div className="w-full overflow-hidden h-2/3">
                <img
                  className="object-cover w-full h-full rounded-tl-lg rounded-tr-lg pointer-events-none "
                  src={
                    newsItem?.media
                      ? newsItem?.media
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BsnxtyM161gr7oMXaII2SVx0qYLaO3siFw&usqp=CAU"
                  }
                  alt="News"
                />
              </div>
              <Link to={`/news/${newsItem.title}`}>
                <div className="flex flex-col items-center justify-center px-2 bg-white h-1/3 ">
                  {" "}
                  <h3 className="text-green-700 pointer-events-auto text-md ssm:text-lg">
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
