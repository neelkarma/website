import { Breadcrumb } from "components/Breadcrumb";
import { ContentLayout } from "components/ContentLayout";
import {
  getAllPosts,
  getPostBySlug,
  PostMeta,
  renderMarkdown,
} from "lib/posts";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const Post: NextPage<{ meta: PostMeta; content: string }> = ({
  meta,
  content,
}) => {
  const { title, description, created, slug } = meta;

  return (
    <ContentLayout title={title} description={description}>
      <Breadcrumb
        links={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Blog",
            href: "/blog",
          },
          {
            label: title,
            href: `/blog/${slug}`,
          },
        ]}
      />
      <p className="font-serif italic text-gray-400">
        {new Date(created).toLocaleDateString("en-AU", {
          month: "long",
          year: "numeric",
          day: "numeric",
        })}
      </p>
      <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h1>
      <h3 className="text-lg">{description}</h3>
      <hr className="border-gray-700" />
      <div
        className="
              max-w-full
              prose prose-invert
              text-gray-300
              prose-a:text-gray-300 prose-a:decoration-gray-500 hover:prose-a:decoration-gray-400 prose-a:transition-colors prose-a:decoration-2
              prose-blockquote:text-gray-300 prose-blockquote:font-serif prose-blockquote:text-xl
              prose-headings:text-gray-300
            "
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </ContentLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.slug !== "string")
    throw `Invalid Slug Provided: ${params?.slug}`;

  const post = getPostBySlug(params.slug);
  if (!post) throw `No post found with slug ${params.slug}`;
  const content = await renderMarkdown(post.content);
  const { title, description, slug, created } = post.data;

  return {
    props: {
      meta: {
        title,
        description,
        slug,
        created: created.toISOString(),
      },
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPosts().map(({ data }) => ({
    params: { slug: data.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
