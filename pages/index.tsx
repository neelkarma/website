import { FadeInUp } from "components/FadeInUp";
import { NowPlaying } from "components/NowPlaying";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-center flex-col font-chivo
    bg-gray-100 dark:bg-gray-800
    text-gray-700 dark:text-gray-300"
    >
      <Head>
        <title>Some Random Developer&apos;s Website</title>
      </Head>
      <div className="flex flex-col gap-4 text-center w-10/12 md:w-2/3 lg:w-1/2">
        <FadeInUp>
          <a href="https://www.github.com/neelkarma">
            <h1 className="transition font-bold text-3xl bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-inter">
              I am a random developer on the internet.
            </h1>
          </a>
        </FadeInUp>

        <FadeInUp delay={1}>
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
            and making various discord bots.
          </p>
        </FadeInUp>
        <FadeInUp delay={2}>
          <NowPlaying />
        </FadeInUp>
      </div>
    </div>
  );
};

export default Home;
