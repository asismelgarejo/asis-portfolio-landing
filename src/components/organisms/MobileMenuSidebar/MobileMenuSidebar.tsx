import { ThemePicker } from "@components/molecules";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link as TLink } from "@api/models";
import { getIcon } from "@toolbox/helpers";
import Link from "next/link";
import { useActiveSectionContext } from "@contexts/ActiveSectionContext";
import { useSettingContext } from "@contexts/SettingSidebarContext";
import { Settings as SettingsIcon } from "@mui/icons-material";

type MobileMenuSidebar = {
  open: boolean;
  toggle(): void;
  menus: TLink[];
  localMenus: TLink[];
};

export const MobileMenuSidebar: React.FC<MobileMenuSidebar> = ({
  toggle,
  open,
  menus,
  localMenus,
}) => {
  const { sections } = useActiveSectionContext();
  const { setOpen } = useSettingContext();

  return (
    <Box sx={{ marginLeft: "auto" }}>
      <IconButton onClick={() => toggle()}>
        <MenuIcon />
      </IconButton>
      <Drawer onClose={() => toggle()} open={open}>
        <List>
          {menus.map((m) => {
            const Icon = getIcon(m.icon);
            return (
              <ListItemButton
                key={m._id}
                selected={m.url === "/"}
                onClick={() => toggle()}
                alignItems="center"
                component={Link}
                href={m.url}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={m.name} />
              </ListItemButton>
            );
          })}
        </List>
        <Divider />
        <List>
          {localMenus.map((m) => {
            const Icon = getIcon(m.icon);
            return (
              <ListItemButton
                alignItems="center"
                key={m._id}
                component={Link}
                href={`#${m.url}`}
                selected={Boolean(sections && sections[m.url]?.active)}
                onClick={() => toggle()}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={m.name} />
              </ListItemButton>
            );
          })}
        </List>
        <Divider />
        <List>
          <ListItemButton onClick={() => setOpen(true)}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};
