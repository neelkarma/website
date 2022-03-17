import { FC } from "react";
import { motion } from "framer-motion";

export const HomeTitle: FC = ({ children }) => {
  return (
    <motion.h1
      initial={{
        filter: "hue-rotate(0deg)",
      }}
      animate={{
        filter: "hue-rotate(360deg)",
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
      }}
      className="font-bold text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-heading"
    >
      {children}
    </motion.h1>
  );
};
