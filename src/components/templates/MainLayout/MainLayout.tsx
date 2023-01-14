import React from "react";
import {
  MainFooter,
  MainHeader,
  VerticalNavigationBar,
} from "@components/molecules";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Container, Children } from "./MainLayout.styled";
import { SettingSidebar } from "@components/organisms";
import { Link as TLink } from "@models/links";

type MainLayoutProps = {
  children: React.ReactNode;
  links: TLink[];
};
export const MainLayout: React.FC<MainLayoutProps> = ({ children, links }) => {
  const theme = useTheme();
  const greaterOrEqualToSM = useMediaQuery(theme.breakpoints.up("md"));
  const showVerticalSidebar = greaterOrEqualToSM;
  return (
    <Container>
      <SettingSidebar />
      <MainHeader />
      <Children data-no-count-offset>
        {showVerticalSidebar && <VerticalNavigationBar data={links}/>}
        <Box>{children}</Box>
      </Children>
      <MainFooter />
    </Container>
  );
};
