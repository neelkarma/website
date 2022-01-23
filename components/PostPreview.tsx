import { FC } from "react";
import { PostMeta } from "lib/posts";
import Link from "next/link";

export const PostPreview: FC<{ meta: PostMeta }> = ({ meta }) => {
  const { title, description, slug, created } = meta;
  return (
    <>
      <Link href={`/blog/${slug}`} passHref>
        <div className="p-4 cursor-pointer flex flex-col gap-3 rounded-lg bg-gray-800 hover:bg-gray-700 click:bg-gray-900 transition-colors">
          <p className="font-serif italic text-gray-400">
            {new Date(created).toLocaleDateString("en-AU", {
              month: "long",
              year: "numeric",
              day: "numeric",
            })}
          </p>
          <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h1>
          <h3>{description}</h3>
        </div>
      </Link>
      <hr className="border-gray-700" />
    </>
  );
};
