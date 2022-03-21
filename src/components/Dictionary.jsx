import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Dictionary = () => {
  const [wordSearched, setWordSearched] = useState(true);
  return (
    <div className="mt-52 lg:mt-[8.5rem] flex flex-col justify-start items-center min-h-[30rem] bg-green-100 p-4 gap-6">
      <div className="h-14 w-96 flex justify-start items-center mt-8">
        <div className="flex justify-center items-center h-full w-full ">
          <input
            className="w-full h-full outline-none px-3  text-xl bg-gray-100 text-green-700 placeholder:text-green-300 rounded-tl-lg rounded-bl-lg  "
            type="text"
            placeholder="Search for a Word..."
            required
          />
          <span className="bg-green-700 h-full w-16 flex justify-center items-center text-white text-3xl rounded-tr-lg rounded-br-lg">
            <BiSearchAlt2 />
          </span>
        </div>
      </div>
      <div className=" w-full h-[55rem] ssm:w-full ssm:h-[36rem] bg-green-300 p-2 rounded-lg">
        <div className="w-full h-full bg-green-100 flex flex-col justify-start items-center gap-2 ">
          <div className="flex  justify-start items-center h-16 bg-green-700 w-full p-2">
            <h1 className="text-green-100 text-xl ssm:text-2xl">Dictionary</h1>
          </div>
          {!wordSearched && (
            <div>
              {" "}
              <h2 className="text-green-500 text-4xl mt-10">Learn New Words</h2>
            </div>
          )}
          {wordSearched && (
            <div className="bg-green-100 w-full h-[55rem] ssm:h-[30rem] flex flex-col gap-2 ssm:flex ssm:flex-row">
              <div className=" w-full h-[12rem] ssm:w-[30rem] ssm:h-full">
                <div className="flex gap-1 h-full w-full p-2 justify-center items-center ssm:flex ssm:flex-col">
                  <div className=" w-1/3 h-full ssm:w-full ssm:h-1/3 p-2 ssm:flex ssm:gap-4">
                    <p className="text-lg ssm:text-2xl text-green-500">
                      Welcome
                    </p>
                    <span className="text-md text-gray-500">/ˈwɛlkəm/</span>
                  </div>
                  <div className="bg-green-500 w-1/3 h-full ssm:w-full ssm:h-1/3 p-2 rounded-lg shadow-2xl">
                    <p className="text-sm ssm:text-lg text-white border-b-2 border-white py-0 px-0 inline-block mb-2">
                      Synonyms
                    </p>
                    <p className="text-sm ssm:text-md text-green-700">
                      Welcome
                    </p>
                    <p className="text-sm ssm:text-md text-green-700">
                      Welcome
                    </p>
                  </div>
                  <div className="bg-green-300 w-1/3 h-full ssm:w-full ssm:h-1/3 p-2 rounded-lg shadow-2xl">
                    <p className="text-sm ssm:text-lg text-white border-b-2 border-white py-0 px-0 inline-block mb-2">
                      Antonyms
                    </p>
                    <p className="text-sm ssm:text-md text-green-700">
                      Welcome
                    </p>
                    <p className="text-sm ssm:text-md text-green-700">
                      Welcome
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-full h-[18rem] ssm:w-[30rem] ssm:h-full flex flex-row ssm:flex ssm:flex-col">
                <div className=" w-1/2 h-full ssm:w-full ssm:h-1/2 p-2 bg-green-300 shadow-xl">
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
                    <span>We entered the house and found a ready welcome.</span>
                  </p>
                </div>
                <div className=" w-1/2 h-full ssm:w-full ssm:h-1/2 p-2 bg-green-700 shadow-xl">
                  <p className="px-2 py-1 bg-white inline-block rounded-md text-green-700 mb-2">
                    Adjective
                  </p>
                  <p className="text-green-100">
                    Definition:{" "}
                    <span>
                      Whose arrival is a cause of joy; received with gladness;
                      admitted willingly to the house, entertainment, or
                      company.
                    </span>
                  </p>
                  <p className="text-green-100">
                    Example: <span>Refugees welcome in London!</span>
                  </p>
                </div>
              </div>
              <div className=" w-full h-[18rem] ssm:w-[30rem] ssm:h-full flex  ssm:flex ssm:flex-col">
                <div className=" w-1/2 h-full ssm:w-full ssm:h-1/2 p-2 bg-green-700 shadow-xl">
                  <p className="px-2 py-1 bg-white inline-block rounded-md text-green-700 mb-2">
                    Noun
                  </p>
                  <p className="text-green-100">
                    Definition:{" "}
                    <span>
                      The act of greeting someone’s arrival, especially by
                      saying "Welcome!"; reception.
                    </span>
                  </p>
                  <p className="text-green-100">
                    Example:{" "}
                    <span>We entered the house and found a ready welcome.</span>
                  </p>
                </div>
                <div className=" w-1/2 h-full ssm:w-full ssm:h-1/2 p-2 bg-green-300 shadow-xl">
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
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
