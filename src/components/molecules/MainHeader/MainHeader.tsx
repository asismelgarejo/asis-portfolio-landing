import React from "react";
import { AppBar, Toolbar, Typography, Stack, Box } from "@mui/material";
import { LogoDev as LogoDevIcon } from "@mui/icons-material/";
import { CustomAppBar, Menu, Menus, CustomToolbar } from "./MainHeader.styled";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

export const MainHeader = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <CustomAppBar position="fixed" scrolled>
        <Box className="Background" />
        <CustomToolbar>
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <Stack spacing={1} direction="row">
            <LogoDevIcon />
            <Typography>ASIS MELGAREJO</Typography>
          </Stack>
          <Menus>
            <Menu active component={Link} href="/">
              <Typography>Home</Typography>
            </Menu>
            <Menu active={false} component={Link} href="/">
              <Typography>Blog</Typography>
            </Menu>
          </Menus>
        </CustomToolbar>
      </CustomAppBar>
      <Toolbar />
    </>
  );
};
