import { BackButton } from "components/BackButton";
import { Layout } from "components/Layout";
import { NextPage } from "next";

const FourOhFour: NextPage = () => {
  return (
    <Layout
      title="404"
      description="This page doesn't exist!"
      className="justify-center items-center"
    >
      <div className="flex flex-col gap-3">
        <h1 className="font-heading font-bold text-3xl">Error 404</h1>
        <p className="text-xl">
          The page you were looking for doesn&apos;t exist!
        </p>
        <BackButton href="/" label="Head back to safety" />
      </div>
    </Layout>
  );
};

export default FourOhFour;
