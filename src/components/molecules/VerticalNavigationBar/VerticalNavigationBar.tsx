import React, { useState } from "react";
import {Card, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import {
  NavigationBar,
  Container,
  Setting,
  Menus,
  Menu,
} from "./VerticalNavigationBar.styled";
import {
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import { useSettingContext } from "src/contexts/SettingSidebarContext";
import Link from "next/link";
import { LINKS } from "@mockups/links";
import { getTotalOffset, screenScrollTo } from "@toolbox/helpers";
export const VerticalNavigationBar = () => {
  const [activeMenuId, setActiveMenuId] = useState("");
  const { setOpen } = useSettingContext();
  const [menus] = useState(LINKS);
  return (
    <Container>
      <NavigationBar component={Card}>
        <Menus>
          {menus.map(({ Icon, ...m }) => (
            <Menu
              key={m._id}
              className="Menu"
              active={m._id === activeMenuId}
              title={m.name}
              placement="right"
            >
              <IconButton
                component={Link}
                href={`#${m.url}`}
                sx={{ fontSize: "inherit" }}
                onClick={() => {
                  if (activeMenuId === m._id) setActiveMenuId("");
                  else setActiveMenuId(m._id);
                  // screenScrollTo(getTotalOffset("about-me"))
                }}
              >
                <Icon className="Icon" sx={{ fontSize: "inherit" }} />
              </IconButton>
            </Menu>
          ))}
        </Menus>
        <Setting>
          <motion.div whileHover={{ rotate: 360, scale: 1.1 }}>
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ fontSize: "inherit" }}
            >
              <SettingsIcon className="Icon" />
            </IconButton>
          </motion.div>
        </Setting>
      </NavigationBar>
    </Container>
  );
};
