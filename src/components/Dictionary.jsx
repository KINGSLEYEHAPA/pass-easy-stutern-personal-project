import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import dictionarySvg from "../assets/img/dictionary-icon.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  fetchWordError,
  fetchWordStart,
  fetchWordSuccess,
} from "../redux/actions/actionFunctions";

const Dictionary = () => {
  const [wordSearched, setWordSearched] = useState(false);
  const [word, setWord] = useState("");

  const wordVariants = {
    hidden: { opacity: 0, y: 800 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 800 },
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const getMeaningOfWord = async (dispatch) => {
      try {
        dispatch(fetchWordStart());

        const randomWordMeaning = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );

        console.log(randomWordMeaning?.data[0]);
        dispatch(fetchWordSuccess(randomWordMeaning?.data[0]));
      } catch (err) {
        dispatch(fetchWordError(err.message));
      }
    };
  }, [dispatch]);

  return (
    <div className="mt-52 lg:mt-[8.5rem] flex flex-col justify-start items-center min-h-[30rem] bg-green-100 px-0 py-4 gap-6">
      <AnimatePresence>
        <div className=" w-full h-[62rem] ssm:w-full ssm:h-[42rem] bg-green-300 p-2 rounded-lg">
          <div className="w-full h-full bg-green-100 flex flex-col justify-start items-center gap-2 ">
            <div className="flex  justify-between items-center h-20 bg-green-700 w-full p-2">
              <div className="flex gap-2">
                <img className="w-5" src={dictionarySvg} alt="dictionary" />
                <h1 className="text-green-100 text-xl ssm:text-2xl">
                  Dictionary
                </h1>
              </div>
              <div className="h-10 ssm:h-12 w-72 ssm:w-96 lg:w-[28rem] flex justify-start items-center">
                <div className="flex justify-center items-center h-full w-full ">
                  <input
                    className="w-full h-full outline-none px-3  text-xl bg-gray-100 text-green-700 placeholder:text-green-300 rounded-tl-lg rounded-bl-lg  "
                    type="text"
                    placeholder="Search for a Word..."
                    required
                  />
                  <span className="bg-green-500 h-full w-16 flex justify-center items-center text-white text-3xl rounded-tr-lg rounded-br-lg">
                    <BiSearchAlt2 />
                  </span>
                </div>
              </div>
            </div>
            {!wordSearched && (
              <div className="mt-20">
                {" "}
                <h2 className="text-green-500 text-4xl mt-10">
                  Learn New Words
                </h2>
              </div>
            )}
            {wordSearched && (
              <div className="bg-green-100 w-full h-[56rem] ssm:h-[32rem] flex flex-col gap-2 ssm:flex ssm:flex-row">
                <div className=" w-full h-[13rem] ssm:w-[30rem] ssm:h-full">
                  <div className="flex gap-1 h-full w-full p-2 justify-center items-center ssm:flex ssm:flex-col">
                    <motion.div
                      variants={wordVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 120,
                      }}
                      className=" w-1/3 h-full ssm:w-full ssm:h-1/3 p-2 ssm:flex ssm:gap-4"
                    >
                      <p className="text-lg ssm:text-2xl md:text-3xl lg:text-5xl text-green-500">
                        Welcome
                      </p>
                      <span className="text-md lg:text-lg text-gray-500">
                        /ˈwɛlkəm/
                      </span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -500 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                      className="bg-green-500 w-1/3 h-full ssm:w-full ssm:h-1/3 p-2 rounded-lg shadow-2xl"
                    >
                      <p className="text-sm ssm:text-lg text-white border-b-2 border-white py-0 px-0 inline-block mb-2">
                        Synonyms
                      </p>
                      <p className="text-sm ssm:text-md text-green-700">
                        Welcome
                      </p>
                      <p className="text-sm ssm:text-md text-green-700">
                        Welcome
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 500 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 1 }}
                      className="bg-green-300 w-1/3 h-full ssm:w-full ssm:h-1/3 p-2 rounded-lg shadow-2xl"
                    >
                      <p className="text-sm ssm:text-lg text-white border-b-2 border-white py-0 px-0 inline-block mb-2">
                        Antonyms
                      </p>
                      <p className="text-sm ssm:text-md text-green-700">
                        Welcome
                      </p>
                      <p className="text-sm ssm:text-md text-green-700">
                        Welcome
                      </p>
                    </motion.div>
                  </div>
                </div>
                <div className=" w-full h-[20rem] ssm:w-[30rem] ssm:h-full flex flex-row ssm:flex ssm:flex-col gap-2">
                  <motion.div
                    initial={{ opacity: 0, x: -500, scale: 0 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className=" w-1/2 h-full ssm:w-full ssm:h-1/2 p-2 bg-green-300 shadow-xl rounded-lg "
                  >
                    <p className="px-2 py-1 bg-green-700 inline-block rounded-md text-white mb-2">
                      Noun
                    </p>
                    <p className="text-green-700">
                      Definition:{" "}
                      <span>
                        The act of greeting someone’s arrival, especially by
                        saying "Welcome!"; reception.
                      </span>
                    </p>
                    <p className="text-green-700">
                      Example:{" "}
                      <span>
                        We entered the house and found a ready welcome.
                      </span>
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -500, scale: 0 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className=" w-1/2 h-full ssm:w-full ssm:h-1/2 p-2 bg-green-300 shadow-xl rounded-lg"
                  >
                    <p className="px-2 py-1 bg-green-700 inline-block rounded-md text-white mb-2">
                      Adjective
                    </p>
                    <p className="text-green-700">
                      Definition:{" "}
                      <span>
                        Whose arrival is a cause of joy; received with gladness;
                        admitted willingly to the house, entertainment, or
                        company.
                      </span>
                    </p>
                    <p className="text-green-700">
                      Example: <span>Refugees welcome in London!</span>
                    </p>
                  </motion.div>
                </div>
                <div className=" w-full h-[20rem] ssm:w-[30rem] ssm:h-full flex  ssm:flex ssm:flex-col mr-2 gap-2">
                  <motion.div
                    initial={{ opacity: 0, x: 500, scale: 0 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className=" w-1/2 h-full ssm:w-full ssm:h-1/2 p-2 bg-green-300 shadow-xl rounded-lg"
                  >
                    <p className="px-2 py-1 bg-green-700 inline-block rounded-md text-white mb-2">
                      Noun
                    </p>
                    <p className="text-green-700">
                      Definition:{" "}
                      <span>
                        The act of greeting someone’s arrival, especially by
                        saying "Welcome!"; reception.
                      </span>
                    </p>
                    <p className="text-green-700">
                      Example:{" "}
                      <span>
                        We entered the house and found a ready welcome.
                      </span>
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 500, scale: 0 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className=" w-1/2 h-full ssm:w-full ssm:h-1/2 p-2 bg-green-300 shadow-xl rounded-lg"
                  >
                    <p className="px-2 py-1 bg-green-700 inline-block rounded-md text-white mb-2">
                      Adjective
                    </p>
                    <p className="text-green-700">
                      Definition:{" "}
                      <span>
                        Whose arrival is a cause of joy; received with gladness;
                        admitted willingly to the house, entertainment, or
                        company.
                      </span>
                    </p>
                    <p className="text-green-700  ">
                      Example: <span>Refugees welcome in London!</span>
                    </p>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Dictionary;
