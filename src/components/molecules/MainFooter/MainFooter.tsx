import { Divider, Typography } from "@mui/material";
// import { getTotalOffset, screenScrollTo } from "@toolbox/helpers";
import Link from "next/link";
import React from "react";
import { LINKS, SOCIAL_NETWORKS } from "src/mocks";
import { Container, SocialNetwork } from "./MainFooter.styled";

export const MainFooter = () => {
  return (
    <Container className="p-l p-r p-t p-b">
      <Typography className="Logo" variant="h4" component="h5">
        Asis Melgarejo
      </Typography>
      <Typography component="div" variant="h5" className="Links hide-in-xs">
        {LINKS.map((l) => (
          <Typography
            variant="h6"
            className="Link"
            key={l._id}
            // onClick={() => screenScrollTo(getTotalOffset(l._id))}
            component={Link}
            href={`#${l.url}`}
          >
            {l.name}
          </Typography>
        ))}
      </Typography>
      <Typography component="div" variant="h5" className="SocialNetworks">
        {SOCIAL_NETWORKS.map(({ Icon, ...i }) => (
          <SocialNetwork key={i._id}>
            <Icon className="Item" />
          </SocialNetwork>
        ))}
      </Typography>
      <Divider sx={{ width: "100%" }} />
      <Typography component="p" variant="h6" className="Copyright">
        {new Date().getFullYear()}&ensp;&copy;&ensp;All rights reserved
      </Typography>
    </Container>
  );
};
