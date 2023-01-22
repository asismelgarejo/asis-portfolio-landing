import { splashStyles } from "@toolbox/constants/splash";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <head>
        <style>{splashStyles}</style>
      </head>
      <body >
        <div id={"globalLoader"}>
          <span className="loader"></span>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
