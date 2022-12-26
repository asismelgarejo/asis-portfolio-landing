import React from "react";
import {
  MainFooter,
  MainHeader,
  VerticalNavigationBar,
} from "@components/molecules";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Container, Children } from "./MainLayout.styled";
import { SettingSidebar } from "@components/organisms";

type MainLayoutProps = {
  children: React.ReactNode;
};
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const greaterOrEqualToSM = useMediaQuery(theme.breakpoints.up("md"));
  const showVerticalSidebar = greaterOrEqualToSM;
  return (
    <Container>
      <SettingSidebar />
      <MainHeader />
      <Children data-no-count-offset>
        {/* <VerticalNavigationBar /> */}
        {showVerticalSidebar && <VerticalNavigationBar />}
        <Box>{children}</Box>
      </Children>
      <MainFooter />
    </Container>
  );
};
