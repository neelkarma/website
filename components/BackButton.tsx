import Link from "next/link";
import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";

export const BackButton: FC<{ href: string; label?: string }> = ({
  href,
  label,
}) => {
  return (
    <Link href={href} passHref>
      <div className="flex gap-2 text-lg items-center cursor-pointer text-gray-400 hover:text-gray-300 transition-colors">
        <FaArrowLeft />
        <p>{label ?? "Go Back"}</p>
      </div>
    </Link>
  );
};
