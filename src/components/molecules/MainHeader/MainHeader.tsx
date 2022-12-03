import React from "react";
import { AppBar, Toolbar, Typography, Stack, Box, } from "@mui/material";
import { LogoDev as LogoDevIcon } from "@mui/icons-material/";
import { CustomAppBar, Menu, Menus, CustomToolbar } from "./MainHeader.styled";
export const MainHeader = () => {
  return (
    <>
      <AppBar>
        <CustomToolbar>
          <Stack spacing={1} direction="row">
            <LogoDevIcon />
            <Typography>ASIS MELGAREJO</Typography>
          </Stack>
          <Menus>
            <Menu component={Typography} active>Home</Menu>
            <Menu component={Typography} active={false}>Blog</Menu>
          </Menus>
        </CustomToolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
