import { Breadcrumb } from "components/Breadcrumb";
import { ContentLayout } from "components/ContentLayout";
import { Heading } from "components/Heading";
import { PostPreview } from "components/PostPreview";
import { PostMeta, getAllPosts } from "lib/posts";
import { GetStaticProps, NextPage } from "next";

const Blog: NextPage<{ posts: PostMeta[] }> = ({ posts }) => {
  return (
    <ContentLayout title="Blog" description="iamkneel's Blog">
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
        ]}
      />
      <Heading title="Blog" subtitle="Don't expect me to update often." />
      <hr className="border-gray-700" />
      {posts.length ? (
        posts.map((post, i) => <PostPreview meta={post} key={i} />)
      ) : (
        <p className="py-4 text-center text-xl text-gray-500">
          Doesn&apos;t look like I&apos;ve posted anything yet. My bad.
        </p>
      )}
    </ContentLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const rawPosts = getAllPosts();
  return {
    props: {
      posts: rawPosts.map((post) => {
        const { title, description, slug, created } = post.data;
        return { title, description, slug, created: created.toISOString() };
      }),
    },
  };
};

export default Blog;
