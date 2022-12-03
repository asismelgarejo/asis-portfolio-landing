import { ThemePicker } from "@components/molecules";
import { Drawer } from "@mui/material";
import React from "react";
import { useSettingContext } from "src/contexts/SettingSidebarContext";

type SettingSidebar = {};

export const SettingSidebar: React.FC<SettingSidebar> = () => {
  const { open, setOpen } = useSettingContext();
  return (
    <Drawer onClose={() => setOpen(false)} open={open}>
      <ThemePicker />
    </Drawer>
  );
};
