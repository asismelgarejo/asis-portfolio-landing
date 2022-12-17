import { Card, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import {
  NavigationBar,
  Container,
  Setting,
  Menus,
  Menu,
} from "./VerticalNavigationBar.styled";
import { Settings as SettingsIcon } from "@mui/icons-material";
import { useSettingContext } from "src/contexts/SettingSidebarContext";
import { useActiveSectionContext } from "src/contexts/ActiveSectionContext";
import Link from "next/link";
import { LINKS } from "src/mocks/links";

export const VerticalNavigationBar = () => {
  const { setOpen } = useSettingContext();
  const { sections } = useActiveSectionContext();

  return (
    <Container>
      <NavigationBar component={Card}>
        <Menus>
          {LINKS.map(({ Icon, ...m }) => (
            <Menu
              key={m._id}
              className="Menu"
              // active={true}
              active={Boolean(sections && sections[m.url]?.active)}
              title={m.name}
              placement="right"
            >
              <IconButton
                component={Link}
                href={`#${m.url}`}
                sx={{ fontSize: "inherit" }}
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
