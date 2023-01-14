import React from "react";
import { SnackbarProvider } from "notistack";
import { ThemeContextProvider } from "./ThemeContext";
import { SettingContextProvider } from "./SettingSidebarContext";
import { ActiveSectionContextProvider } from "./ActiveSectionContext";

type AllContextsProps = {
  children: React.ReactNode;
};

const AllContexts: React.FC<AllContextsProps> = ({ children }) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <SettingContextProvider>{children}</SettingContextProvider>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </SnackbarProvider>
  );
};

export default AllContexts;
