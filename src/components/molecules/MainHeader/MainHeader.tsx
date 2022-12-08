import React from "react";
import { AppBar, Toolbar, Typography, Stack, Box } from "@mui/material";
import { LogoDev as LogoDevIcon } from "@mui/icons-material/";
import { CustomAppBar, Menu, Menus, CustomToolbar } from "./MainHeader.styled";
import Link from "next/link";
export const MainHeader = () => {
  return (
    <>
      <CustomAppBar position="fixed" scrolled>
        <Box className="Background" />
        <CustomToolbar>
          <Stack spacing={1} direction="row">
            <LogoDevIcon />
            <Typography>ASIS MELGAREJO</Typography>
          </Stack>
          <Menus>
            <Link href="/">
              <Menu component={Typography} active>
                Home
              </Menu>
            </Link>
            <Menu component={Typography} active={false}>
              Blog
            </Menu>
          </Menus>
        </CustomToolbar>
      </CustomAppBar>
      <Toolbar />
    </>
  );
};
