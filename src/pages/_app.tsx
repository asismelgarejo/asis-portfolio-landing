import "../../styles/globals.css";
import type { AppProps } from "next/app";
import AllContexts from "src/contexts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AllContexts>
        <Component {...pageProps} />
      </AllContexts>
    </>
  );
}
