import "../../styles/globals.css";
import type { AppProps } from "next/app";
import AllContexts from "src/contexts";
import "./style.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      const body = document.getElementsByTagName("body");
      if (loader) loader.style.display = "none";
      if (body) {
        body[0].style.overflow = "unset";
        body[0].style.width = "unset";
        body[0].style.height = "unset";
      }
    }
  }, []);

  return (
    <>
      <AllContexts>
        <Component {...pageProps} />
      </AllContexts>
    </>
  );
}
