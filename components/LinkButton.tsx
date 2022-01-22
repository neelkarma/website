import { motion } from "framer-motion";
import Link from "next/link";
import { FC, useState } from "react";
import { IconType } from "react-icons";
import { FaArrowRight } from "react-icons/fa";

export const LinkButton: FC<{
  href: string;
  label: string;
  icon: IconType;
}> = ({ href, label, icon: Icon }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link href={href} passHref>
      <div
        className="p-3 flex gap-2 items-center rounded-lg w-fit bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <motion.div
          animate={{ opacity: hover ? 1 : 0, translateX: hover ? 0 : "-10px" }}
          transition={{
            type: "tween",
            ease: [0, 0, 0.2, 1],
            duration: 0.3,
          }}
          className="absolute"
        >
          <FaArrowRight />
        </motion.div>
        <motion.div
          animate={{ opacity: hover ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Icon />
        </motion.div>
        {label}
      </div>
    </Link>
  );
};
