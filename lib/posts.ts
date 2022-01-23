import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import path from "path";

export interface PostMeta {
  title: string;
  description: string;
  slug: string;
  created: string;
}

export const getAllPosts = () => {
  return readdirSync(path.join(__dirname, "../../../blog/")).map((file) =>
    matter(readFileSync(path.join(__dirname, `../../../blog/${file}`), "utf-8"))
  );
};

export const getPostBySlug = (slug: string) => {
  return getAllPosts().find((post) => slug === post.data.slug);
};

export const renderMarkdown = async (content: string) => {
  const rendered = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);
  return String(rendered);
};
