import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Welcome = () => {
  const [welcome, setWelcome] = useState(true);
  const [welcomeText, setWelcomeText] = useState(true);
  const logo = "PassEasy";

  const sentence = {
    hidden: { opacity: 1 },
    visble: {
      opacity: 1,
      transition: {
        delay: 0.25,
        duration: 2.5,
        ease: "easeInOut",
      },
    },
  };

  //   const letter = {
  //     hidden: { opacity: 0, x: -50 },
  //     visible: {
  //       opacity: 1,
  //       x: 0,
  //       transition: {
  //         duration: 3,
  //         type: "spring",
  //         stiffness: 120,
  //         delay: 0.5,
  //       },
  //     },
  //   };
  useEffect(() => {
    setTimeout(() => {
      setWelcome(false);
    }, 3200);
    setTimeout(() => {
      setWelcomeText(false);
    }, 3000);
  }, []);
  return (
    <>
      {welcome && (
        <div className="sticky top:0 left:0 bg-green-500 h-screen w-screen z-50 flex justify-center items-center ">
          <AnimatePresence>
            {welcomeText && (
              <motion.h2
                variants={sentence}
                initial="hidden"
                animate="visible"
                exit={{ y: [-50, 50, 0], opacity: 0 }}
              >
                {logo.split("").map((char, i) => {
                  return (
                    <motion.span
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: 1, scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        delay: i * 0.25,
                        bounce: 2,
                      }}
                      key={char + "-" + i}
                      className={
                        i <= 3
                          ? " text-5xl  ssm:text-6xl lg:text-8xl text-green-700 font-bold inline-block"
                          : " text-5xl  ssm:text-6xl lg:text-8xl text-white font-bold inline-block"
                      }
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h2>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default Welcome;
