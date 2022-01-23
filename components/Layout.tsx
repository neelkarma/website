import { FC } from "react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

export const Layout: FC<{
  title: string;
  description: string;
  className?: string;
}> = ({ title, description, children, className }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <motion.main
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          type: "linear",
        }}
        className={`
          px-6 md:px-24 lg:px-48
          flex min-h-screen flex-col
          font-body
          ${className}
        `}
      >
        {children}
      </motion.main>
    </>
  );
};
