import { Divider, Typography } from "@mui/material";
import React from "react";
import { LINKS, SOCIAL_NETWORKS } from "src/mockups";
import { Container, SocialNetwork } from "./MainFooter.styled";

export const MainFooter = () => {
  return (
    <Container>
      <Typography className="Logo" variant="h2">
        Asis Melgarejo
      </Typography>
      <Typography component="p" variant="h5" className="Links">
        {LINKS.map((l) => (
          <Typography
            component="span"
            variant="h6"
            className="Link"
            key={l._id}
          >
            {l.name}
          </Typography>
        ))}
      </Typography>
      <Typography component="p" variant="h5" className="SocialNetworks">
        {SOCIAL_NETWORKS.map(({ Icon, ...i }) => (
          <SocialNetwork key={i._id}>
            <Icon className="Item" />
          </SocialNetwork>
        ))}
      </Typography>
      <Divider sx={{ width: "98%" }} />
      <Typography component="p" variant="h6" className="Copyright">
        {new Date().getFullYear()}&ensp;&copy;&ensp;All rights reserved
      </Typography>
    </Container>
  );
};
