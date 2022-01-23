import { FadeInLeft } from "components/FadeInLeft";
import { FadeInUp } from "components/FadeInUp";
import { NowPlaying } from "components/NowPlaying";
import { LinkButton } from "components/LinkButton";
import type { NextPage } from "next";
import { FaCode, FaGithub, FaPen } from "react-icons/fa";
import { RandomImage } from "components/RandomImage";
import { Layout } from "components/Layout";

const Home: NextPage = () => {
  return (
    <Layout
      title="Home"
      description="Home"
      className="justify-center items-center"
    >
      <div className="flex flex-col gap-4">
        <FadeInLeft>
          <RandomImage />
        </FadeInLeft>
        <FadeInLeft delay={0.2}>
          <h1 className="transition font-bold text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-heading">
            I am a random developer on the internet.
          </h1>
        </FadeInLeft>
        <FadeInLeft delay={0.4}>
          <p className="text-lg">
            A musical nerd, a fullstack developer, familiar with{" "}
            <a
              href="https://www.typescriptlang.org"
              className="bio-link decoration-blue-500 hover:decoration-blue-300"
            >
              TypeScript
            </a>
            ,{" "}
            <a
              href="https://www.nextjs.org"
              className="bio-link decoration-purple-500 hover:decoration-purple-300"
            >
              Next.js
            </a>
            ,{" "}
            <a
              href="https://www.reactjs.org"
              className="bio-link decoration-teal-500 hover:decoration-teal-300"
            >
              React
            </a>
            ,{" "}
            <a
              href="https://www.python.org"
              className="bio-link decoration-yellow-500 hover:decoration-yellow-300"
            >
              Python
            </a>{" "}
            and addicted to beautiful UIs.
          </p>
        </FadeInLeft>
        <div className="flex gap-3">
          <FadeInUp delay={0.6}>
            <LinkButton
              href="https://www.github.com/neelkarma"
              label="GitHub"
              icon={FaGithub}
            />
          </FadeInUp>
          <FadeInUp delay={0.8}>
            <LinkButton
              href="https://github.com/neelkarma?tab=repositories"
              label="Projects"
              icon={FaCode}
            />
          </FadeInUp>
          <FadeInUp delay={1}>
            <LinkButton href="/blog" label="Blog" icon={FaPen} />
          </FadeInUp>
        </div>
        <FadeInLeft delay={1.2}>
          <NowPlaying />
        </FadeInLeft>
      </div>
    </Layout>
  );
};

export default Home;
