import "styles/globals.css";
import "@fontsource/chivo";
import "@fontsource/inter";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default App;
