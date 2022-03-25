import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PerformanceSheet = () => {
  return (
    <AnimatePresence>
      <motion.div className="absolute top-0 left-0 z-100 w-[23rem] h-[45rem] bg-orange-600 shadow-2xl">
        <header> </header>
      </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceSheet;
