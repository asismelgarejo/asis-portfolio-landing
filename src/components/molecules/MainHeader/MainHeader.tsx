import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { LogoDev as LogoDevIcon } from "@mui/icons-material/";
import { CustomAppBar, Menus, CustomToolbar } from "./MainHeader.styled";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { WebsiteMeasureBuilder } from "@toolbox/helpers";
import { MobileMenuSidebar } from "@components/organisms";
import { LINKS, PAGE_LINKS } from "@mocks/links";
import { ActiveLink } from "@components/atoms";
const measuresHeader = new WebsiteMeasureBuilder().headerHeight();
export const MainHeader = () => {
  const { scrollYProgress } = useScroll();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);
  return (
    <>
      <CustomAppBar position="fixed" scrolled>
        <Box className="Background" />
        <CustomToolbar className="p-l p-r">
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <Stack spacing={1} direction="row" alignItems="center">
            <LogoDevIcon />
            <Typography variant="h6">ASIS MELGAREJO</Typography>
          </Stack>
          {isMobile && (
            <Menus>
              {PAGE_LINKS.map((pl) => (
                <ActiveLink
                  activeClassName="Active"
                  className="Menu"
                  href={pl.url}
                  key={pl._id}
                >
                  <Typography>{pl.name}</Typography>
                </ActiveLink>
              ))}
            </Menus>
          )}
          {!isMobile && (
            <MobileMenuSidebar
              open={open}
              toggle={() => setOpen((prev) => !prev)}
              menus={PAGE_LINKS}
              localMenus={LINKS}
            />
          )}
        </CustomToolbar>
      </CustomAppBar>
      <Toolbar sx={{ ...measuresHeader.build() }} />
    </>
  );
};
