import "styles/globals.css";
import "@fontsource/chivo";
import "@fontsource/inter";
import "@fontsource/newsreader";
import "highlight.js/styles/atom-one-dark.css";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps, router }: AppProps) => {
  const url = `https://www.iamkneel.tk${router.route}`;
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <DefaultSeo
        titleTemplate="%s | iamkneel"
        openGraph={{
          type: "website",
          locale: "en_AU",
          url,
          description: "My personal website.",
          site_name: "iamkneel.tk",
        }}
        canonical={url}
      />
      <div className="min-h-screen bg-gray-800 text-gray-300">
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={url} />
        </AnimatePresence>
      </div>
    </SWRConfig>
  );
};

export default App;
