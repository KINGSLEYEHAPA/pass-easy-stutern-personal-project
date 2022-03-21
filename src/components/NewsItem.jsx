import React from "react";

const NewsItem = () => {
  return (
    <div className="mt-52 lg:mt-[8.5rem] flex justify-center items-center bg-green-100">
      <div className="flex flex-col justify-start items-start p-4 pb-20">
        <img
          className="w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BsnxtyM161gr7oMXaII2SVx0qYLaO3siFw&usqp=CAU"
          alt="Main News"
        />
        <h1 className="text-xl ssm:text-2xl md:text-4xl mb-4 mt-2 text-green-500">
          The Main Headline for the News
        </h1>

        <div className="flex flex-col justify-start">
          {" "}
          <p className="text-sm ssm:text-md md:text-lg lg:text-xl mb-4 mt-2 text-green-700">
            Date
          </p>{" "}
          <p className="text-sm ssm:text-md md:text-lg lg:text-xl mb-4 mt-2 text-green-700">
            {" "}
            Author
          </p>
        </div>
        <p className="w-full text-green-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, qui
          maiores sapiente architecto iste in pariatur et cum laudantium enim
          illum expedita impedit fuga temporibus nisi eius quis officia saepe
          nobis quibusdam. Perferendis, natus iure nisi dolorum illo reiciendis
          at vero libero nulla consectetur cupiditate aliquid ea incidunt rerum
          quis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
          qui maiores sapiente architecto iste in pariatur et cum laudantium
          enim illum expedita impedit fuga temporibus nisi eius quis officia
          saepe nobis quibusdam. Perferendis, natus iure nisi dolorum illo
          reiciendis at vero libero nulla consectetur cupiditate aliquid ea
          incidunt rerum quis.Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Omnis, qui maiores sapiente architecto iste in
          pariatur et cum laudantium enim illum expedita impedit fuga temporibus
          nisi eius quis officia saepe nobis quibusdam. Perferendis, natus iure
          nisi dolorum illo reiciendis at vero libero nulla consectetur
          cupiditate aliquid ea incidunt rerum quis.Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Omnis, qui maiores sapiente architecto
          iste in pariatur et cum laudantium enim illum expedita impedit fuga
          temporibus nisi eius quis officia saepe nobis quibusdam. Perferendis,
          natus iure nisi dolorum illo reiciendis at vero libero nulla
          consectetur cupiditate aliquid ea incidunt rerum quis.Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Omnis, qui maiores
          sapiente architecto iste in pariatur et cum laudantium enim illum
          expedita impedit fuga temporibus nisi eius quis officia saepe nobis
          quibusdam. Perferendis, natus iure nisi dolorum illo reiciendis at
          vero libero nulla consectetur cupiditate aliquid ea incidunt rerum
          quis. <span className="text-gray-300"> Read More</span>
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
