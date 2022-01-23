import { FC } from "react";
import { Layout } from "./Layout";

export const ContentLayout: FC<{
  title: string;
  description: string;
  className?: string;
}> = ({ title, description, className, children }) => {
  return (
    <Layout
      title={title}
      description={description}
      className="items-center pt-8"
    >
      <div
        className={`
          flex flex-col gap-3 md:gap-4 pb-8
          w-full md:w-[65ch] lg:w-[75ch] md:pl-8
          md:border-l-gray-700 md:border-l-2 md:border-dotted
          ${className}`}
      >
        {children}
      </div>
    </Layout>
  );
};
