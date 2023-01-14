import React from "react";
import { SnackbarProvider } from "notistack";
import { ThemeContextProvider } from "./ThemeContext";
import { SettingContextProvider } from "./SettingSidebarContext";
import { ActiveSectionContextProvider } from "./ActiveSectionContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type AllContextsProps = {
  children: React.ReactNode;
};
const queryClient = new QueryClient();

const AllContexts: React.FC<AllContextsProps> = ({ children }) => {
  return (
    <SnackbarProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <SettingContextProvider>{children}</SettingContextProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </QueryClientProvider>
    </SnackbarProvider>
  );
};

export default AllContexts;
