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
import { getIcon } from "@toolbox/helpers";
import { Link as TLink } from "@models/links";

type VerticalNavigationBarProps = {
  data: TLink[];
};
export const VerticalNavigationBar: React.FC<VerticalNavigationBarProps> = ({
  data,
}) => {
  const { setOpen } = useSettingContext();
  const { sections } = useActiveSectionContext();
  const HomeIcon = getIcon("HomeIcon");

  return (
    <Container>
      <NavigationBar component={Card}>
        <motion.div whileHover={{ scale: 1.2 }} style={{ display: "flex" }}>
          <IconButton
            component={Link}
            href={"/"}
            disableRipple
            sx={{ margin: "auto" }}
          >
            <HomeIcon
              className="Icon"
              sx={{ fontSize: "inherit", margin: "auto" }}
            />
          </IconButton>
        </motion.div>
        <Menus sx={{minHeight: "20px"}}>
          {data.map((m) => {
            const Icon = getIcon(m.icon);
            return (
              <Menu
                key={m._id}
                className="Menu"
                active={Boolean(sections && sections[m.url]?.active)}
                title={m.name}
                placement="right"
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  <IconButton
                    component={Link}
                    href={m.url === "/" ? "/" : `#${m.url}`}
                    sx={{ fontSize: "inherit" }}
                    disableRipple
                  >
                    <Icon className="Icon" sx={{ fontSize: "inherit" }} />
                  </IconButton>
                </motion.div>
              </Menu>
            );
          })}
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
