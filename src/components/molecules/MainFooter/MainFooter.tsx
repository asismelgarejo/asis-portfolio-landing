import { Box, Divider, Typography } from "@mui/material";
import { getIcon } from "@toolbox/helpers";
import Link from "next/link";
import React from "react";
import { LINKS, SOCIAL_NETWORKS } from "src/mocks";
import { Container, SocialNetwork } from "./MainFooter.styled";

export const MainFooter = () => {
  return (
    <Container className="p-l p-r p-t p-b">
      <Typography className="Logo" variant="h2" component="h5">
        Asis Melgarejo
      </Typography>
      <Typography component="div" variant="h6" className="Links hide-in-xs">
        {LINKS.map((l) => (
          <Typography
            variant="h6"
            className="Link"
            key={l._id}
            component={Link}
            href={`#${l.url}`}
          >
            {l.name}
          </Typography>
        ))}
      </Typography>
      <Box component="div" className="SocialNetworks">
        {SOCIAL_NETWORKS.map((i) => {
          const Icon = getIcon(i.icon);
          return (
            <SocialNetwork key={i._id} component="a" href={i.link} target="_blank">
              <Icon className="Item" />
            </SocialNetwork>
          );
        })}
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Typography component="p" variant="h6" className="Copyright">
        {new Date().getFullYear()}&ensp;&copy;&ensp;All rights reserved
      </Typography>
    </Container>
  );
};
