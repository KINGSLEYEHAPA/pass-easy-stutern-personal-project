import { motion } from "framer-motion";

const MenuItem = ({ text, selected, onClick }) => (
  <motion.div
    className="cursor-pointer relative text-md md:text-lg text-green-100"
    onClick={onClick}
    animate={{ opacity: selected ? 1 : 0.5 }}
  >
    {text}
    {selected && (
      <motion.div
        className="absolute top-full left-0 h-1 w-full rounded bg-white/80"
        layoutId="underline"
      />
    )}
  </motion.div>
);
export default MenuItem;
