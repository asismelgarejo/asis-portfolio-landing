import React from "react";
import {
  MainFooter,
  MainHeader,
  VerticalNavigationBar,
} from "@components/molecules";
import { Box } from "@mui/material";
import { Container } from "./MainLayout.styled";
import { SettingSidebar } from "@components/organisms";

type MainLayoutProps = {
  children: React.ReactNode;
};
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container>
      <MainHeader />
      <SettingSidebar />
      <VerticalNavigationBar />
      <Box sx={{ minHeight: "1000px" }}>{children}</Box>
      <MainFooter />
    </Container>
  );
};
