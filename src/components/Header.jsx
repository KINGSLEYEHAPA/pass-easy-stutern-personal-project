import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { RiMailFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import Search from "./Search";

const Header = () => {
  const [subMenu, setSubMenu] = useState(true);
  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="w-full h-32 lg:h-14 bg-white flex flex-col lg:flex-row justify-center items-center lg:gap-0 ">
        <div className="bg-green-100/30 h-full w-full lg:w-80 flex justify-between items-center  p-4 hover:cursor-pointer border-r-2 border-gray-100">
          <div className="flex justify-center items-center gap-2 hover:text-green-700">
            <span className="text-xl text-green-300 ">
              {" "}
              <RiMailFill />
            </span>
            <span className="text-lg text-green-300 hover:text-green-500">
              <a href="mailto:kessity09@gmail.com">kessity09@gmail.com</a>
            </span>
          </div>
          <div className="flex lg:hidden ">
            <p className="text-md text-green-700 cursor-pointer hover:border-b border-green-700">
              Login{" "}
            </p>
            <span className="text-md text-green-700 cursor-pointer hover:border-b border-green-700">
              /Register
            </span>
          </div>
        </div>
        <div className="bg-green-100/30 h-full w-96 hidden lg:flex justify-start items-center gap-3 p-4 hover:cursor-pointer">
          <span className="text-xl text-green-300">
            {" "}
            <BsTelephoneFill />
          </span>
          <span className="text-lg text-green-300">+2348156171958</span>
        </div>
        <div className="bg-green-100/30 h-full w-full lg:w-80 flex justify-center items-center hover:cursor-pointer border-l-2 border-gray-100">
          <Search />
        </div>
        <div className="bg-green-100/30 h-full w-80 hidden lg:flex justify-center items-center">
          <p className="text-xl text-green-700 cursor-pointer hover:border-b border-green-700">
            Login{" "}
          </p>
          <span className="text-xl text-green-700 cursor-pointer hover:border-b border-green-700">
            /Register
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center w-full h-20 bg-green-300 px-5 sticky z-20 top-0 shadow-lg  ">
        <Link to="/">
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 120,
            }}
            className=" text-green-700 font-bold text-3xl"
          >
            Pass<span className="text-white">Easy</span>
          </motion.p>
        </Link>
        <div className=" md:pr-14 md:block hidden">
          <ul className="md:flex md:text-center justify-center md:space-x-7 text-green-700  cursor-pointer md:text-md   ">
            <Link to="/">
              <li className="hover:text-white">HOME</li>
            </Link>
            <Link to="/quiz">
              <li className="hover:text-white">QUIZ</li>
            </Link>
            <Link to="/dictionary">
              <li className="hover:text-white">DICTIONARY</li>
            </Link>
            <Link to="/leaderboard">
              <li className="hover:text-white">PERFORMANCE</li>
            </Link>
            <Link to="/">
              <li className="hover:text-white">ABOUT</li>
            </Link>
          </ul>{" "}
        </div>

        <div
          className={` ${
            subMenu
              ? "hidden"
              : "absolute top-20 left-[-0.01rem] w-full right-4  h-44  md:hidden"
          }  `}
        >
          <ul className="flex flex-col  bg-green-300  py-4 px-6  mx-0 justify-center items-start space-y-4 text-green-700 cursor-pointer w-full text-lg  ">
            <li className="hover:text-white">HOME</li>
            <li className="hover:text-white">QUIZ</li>
            <li className="hover:text-white">DICTIONARY</li>
            <li className="hover:text-white">PERFORMANCE</li>
            <li className="hover:text-white">ABOUT</li>
          </ul>{" "}
        </div>
        <AnimatePresence>
          {subMenu && (
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5 }}
              onClick={() => {
                setSubMenu(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:hidden block text-green-700 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </motion.svg>
          )}
          {!subMenu && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5 }}
              className="text-3xl md:hidden block text-green-700 "
              onClick={() => {
                setSubMenu(true);
              }}
            >
              <MdClose />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
