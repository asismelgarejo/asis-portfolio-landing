import React, { useState } from "react";
import { Box, Card, IconButton } from "@mui/material";
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
  AccountCircle as UserIcon,
  School as SchoolIcon,
  BusinessCenter as BagIcon,
  Code as CodeIcon,
  PermContactCalendar as ContactIcon,
} from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import { useSettingContext } from "src/contexts/SettingSidebarContext";
export const VerticalNavigationBar = () => {
  const [activeMenuId, setActiveMenuId] = useState("");
  const { setOpen } = useSettingContext();
  const [menus] = useState([
    {
      _id: uuidv4(),
      name: "About me",
      Icon: UserIcon,
    },
    {
      _id: uuidv4(),
      name: "Education & Certifications",
      Icon: SchoolIcon,
    },
    {
      _id: uuidv4(),
      name: "Experience",
      Icon: BagIcon,
    },
    {
      _id: uuidv4(),
      name: "Skills",
      Icon: CodeIcon,
    },
    {
      _id: uuidv4(),
      name: "Projects",
      Icon: BagIcon,
    },
    {
      _id: uuidv4(),
      name: "Contact",
      Icon: ContactIcon,
    },
  ]);
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
                sx={{ fontSize: "inherit" }}
                onClick={() => {
                  if (activeMenuId === m._id) setActiveMenuId("");
                  else setActiveMenuId(m._id);
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
