import React from "react";
import { BsTwitter, BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="h-[50rem] md:h-72 bg-green-500 w-full flex flex-col justify-start items-start md:items-center md:flex-row p-6 md:gap-16 gap-24 ">
      <div className="md:w-96">
        <p className=" text-green-700 font-bold text-2xl">
          Pass<span className="text-white">Easy</span>
        </p>
        <p className="mt-6 text-green-100">
          PassEasy is a web application that prepares student for entrance exam
          into the university.PassEasy has a quiz platform for student to master
          past questions in previous exams in UTME,WASSCE and POST-UTME.
        </p>
        <p className="mt-5 text-green-700">
          Kingsley Omozogie Ehapa -Copyright &copy;2022
        </p>
      </div>
      <div className="md:w-80">
        <h2 className="text-2xl text-green-700">Contact Us</h2>
        <p className="mt-6 text-green-100">kessity09@gmail.com</p>
        <p className="text-green-100">+2348156171958</p>
        <p className="text-green-100"> Lagos Nigeria</p>
      </div>
      <div className="md:mb-12">
        <h2 className="text-2xl text-green-700">Follow Us</h2>
        <div className="flex gap-4 mt-6 text-green-100 text-2xl">
          <span className="hover:text-green-700">
            <BsTwitter />
          </span>
          <span className="hover:text-green-700">
            <BsFacebook />
          </span>
          <span className="hover:text-green-700">
            <BsLinkedin />
          </span>
          <span className="hover:text-green-700">
            <BsInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
