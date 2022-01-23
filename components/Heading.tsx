import { FC } from "react";

export const Heading: FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <>
      <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h1>
      <h3 className="text-gray-400 text-lg">{subtitle}</h3>
    </>
  );
};
