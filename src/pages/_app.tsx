import '../../styles/globals.css'
import type { AppProps } from "next/app";
import { ThemeContextProvider } from "src/contexts";
import { SettingContextProvider } from "src/contexts/SettingSidebarContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeContextProvider>
        <SettingContextProvider>
          <Component {...pageProps} />
        </SettingContextProvider>
      </ThemeContextProvider>
    </>
  );
}
