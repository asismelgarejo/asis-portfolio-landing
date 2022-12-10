import { ThemeContextProvider } from "./ThemeContext";
import { SettingContextProvider } from "./SettingSidebarContext";
import { ActiveSectionContextProvider } from "./ActiveSectionContext";
import React from "react";

type AllContextsProps = {
  children: React.ReactNode;
};

const AllContexts: React.FC<AllContextsProps> = ({ children }) => {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <SettingContextProvider>{children}</SettingContextProvider>
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
};

export default AllContexts;
