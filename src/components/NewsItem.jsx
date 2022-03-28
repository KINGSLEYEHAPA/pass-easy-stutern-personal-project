import React from "react";
import { useSelector } from "react-redux";
import { BsNewspaper } from "react-icons/bs";
import { useParams } from "react-router-dom";

const NewsItem = () => {
  const latestNews = useSelector((state) => state.news.latestNews);
  let params = useParams();

  let oneNewsItem = latestNews?.find((news) => {
    return news.title === params.news;
  });
  console.log(oneNewsItem);

  return (
    <div
      className="mt-52 lg:mt-[8.5rem] flex flex-col justify-start items-center bg-green-100"
      id="news"
    >
      <div className="flex  justify-between items-center h-20 bg-green-700 w-full p-2">
        <div className="flex gap-2 ">
          <span className="text-green-800 mt-1 text-lg ssm:text-2xl">
            <BsNewspaper />
          </span>
          <h1 className="text-green-100  text-xl ssm:text-2xl">News</h1>
        </div>
      </div>
      <div className="flex flex-col ssm:flex-row justify-center items-center p-4 pb-20 gap-10">
        <div className=" w-full ssm:w-[30rem] h-[22rem] ssm:h-[28rem] lg:h-[32rem] lg:w-[35rem] xl:w-[45rem] rounded-lg ">
          <img
            className="w-full h-full rounded-lg "
            src={
              oneNewsItem?.media
                ? oneNewsItem?.media
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BsnxtyM161gr7oMXaII2SVx0qYLaO3siFw&usqp=CAU"
            }
            alt="Main News"
          />
        </div>
        <div className="w-full ssm:w-1/2 flex flex-col justify-start ">
          <div className="flex justify-start items-center ">
            <h1 className="text-xl ssm:text-2xl md:text-4xl mb-4 mt-2 text-green-500">
              {oneNewsItem?.title}
            </h1>{" "}
          </div>

          <div className="flex  justify-start items-center w-full gap-3 ">
            {" "}
            <p className="text-sm ssm:text-md md:text-lg lg:text-xl mb-4 mt-2 text-green-700 font-bold">
              Author: {oneNewsItem?.author}
            </p>{" "}
            <p className="text-sm ssm:text-md md:text-lg lg:text-xl mb-4 mt-2 text-green-700 font-bold">
              {" "}
              {oneNewsItem?.published_date}
            </p>
          </div>
          <p className="w-full text-green-700">
            {oneNewsItem?.summary}{" "}
            <span className="text-gray-600 font-bold">
              {" "}
              <a href={oneNewsItem?.link}>Read More...</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
