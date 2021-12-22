import { FC } from "react";
import { motion } from "framer-motion";

export const FadeInUp: FC<{ delay?: number }> = ({ children, delay }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: "4rem",
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        type: "tween",
        ease: [0, 0, 0.2, 1],
        duration: 0.7,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};
