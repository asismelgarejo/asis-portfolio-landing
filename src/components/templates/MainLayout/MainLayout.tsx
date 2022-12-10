import React from "react";
import {
  MainFooter,
  MainHeader,
  VerticalNavigationBar,
} from "@components/molecules";
import { Box } from "@mui/material";
import { Container, Children } from "./MainLayout.styled";
import { SettingSidebar } from "@components/organisms";

type MainLayoutProps = {
  children: React.ReactNode;
};
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container>
      <SettingSidebar />
      <MainHeader />
      <Children data-no-count-offset>
        <VerticalNavigationBar />
        <Box>{children}</Box>
      </Children>
      <MainFooter />
    </Container>
  );
};
