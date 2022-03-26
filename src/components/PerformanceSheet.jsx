import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PerformanceSheet = () => {
  return (
    <AnimatePresence>
      <motion.div className="absolute top-0 left-0 z-100 w-[22.4rem] ssm:w-[23rem] h-[45rem] bg-green-500 shadow-2xl p-3">
        <div className="overflow-y-auto  overflow-hidden scrollbar-hide w-full h-full">
          <header className="w-full  h-20 flex flex-col items-center justify-start border-b-2 border-green-100 text-green-100">
            <h4 className="text-2xl">Your Scoresheet</h4>
            <p>Chemistry UTME 2015 </p>
            <p className="text-gray-300">26 mar 2022</p>
          </header>
          <section className="min-h-[50rem] w-full ">
            <div>
              <p>
                {" "}
                <strong>Q:</strong> What is the IUPAC Name of H2SO4?
              </p>
              <div>
                <p>this is you answer</p>
              </div>
              <div>
                {" "}
                <p>this is the correct answer</p>
              </div>
            </div>
            <div>
              <p>
                {" "}
                <strong>Q:</strong> What is the IUPAC Name of H2SO4?
              </p>
              <div>
                <p>this is you answer</p>
              </div>
              <div>
                {" "}
                <p>this is the correct answer</p>
              </div>
            </div>
            <div>
              <p>
                {" "}
                <strong>Q:</strong> What is the IUPAC Name of H2SO4?
              </p>
              <div>
                <p>this is you answer</p>
              </div>
              <div>
                {" "}
                <p>this is the correct answer</p>
              </div>
            </div>
            <div>
              <p>
                {" "}
                <strong>Q:</strong> What is the IUPAC Name of H2SO4?
              </p>
              <div>
                <p>this is you answer</p>
              </div>
              <div>
                {" "}
                <p>this is the correct answer</p>
              </div>
            </div>
            <div>
              <p>
                {" "}
                <strong>Q:</strong> What is the IUPAC Name of H2SO4?
              </p>
              <div>
                <p>this is you answer</p>
              </div>
              <div>
                {" "}
                <p>this is the correct answer</p>
              </div>
            </div>
            <div>
              <p>
                {" "}
                <strong>Q:</strong> What is the IUPAC Name of H2SO4?
              </p>
              <div>
                <p>this is you answer</p>
              </div>
              <div>
                {" "}
                <p>this is the correct answer</p>
              </div>
            </div>
            <div>
              <p>
                {" "}
                <strong>Q:</strong> What is the IUPAC Name of H2SO4?
              </p>
              <div>
                <p>this is you answer</p>
              </div>
              <div>
                {" "}
                <p>this is the correct answer</p>
              </div>
            </div>
            <div>
              <p>
                {" "}
                <strong>Q:</strong> What is the IUPAC Name of H2SO4?
              </p>
              <div>
                <p>this is you answer</p>
              </div>
              <div>
                {" "}
                <p>this is the correct answer</p>
              </div>
            </div>
          </section>
          <div>
            {" "}
            <p>
              You answer 36 out of 40 questions and you finished this quiz in
              4mins 25secs
            </p>{" "}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceSheet;
