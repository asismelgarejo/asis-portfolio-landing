import { HolderAnchor } from "@components/atoms";
import { PROJECTS } from "@mocks/projects";
import {
  RemoveRedEye as EyeIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { useActiveSection } from "@toolbox/hooks";
import { useSpreadCardAnimations } from "@toolbox/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Cards, Container } from "./Projects.styled";

const Projects = () => {
  const { containerRef } = useActiveSection("projects");
  const { cards, card } = useSpreadCardAnimations();
  return (
    <Container ref={containerRef} className="p-t p-b">
      <HolderAnchor _id="projects" />
      <Typography component="h2" variant="h2" className="TitleSection m-b-t">
        Projects
      </Typography>
      <Divider />
      <Cards
        component={motion.div}
        initial="loading"
        whileInView="loaded"
        variants={cards}
        className="TitleSection m-t-t"
      >
        {PROJECTS.map((p) => (
          <Card
            sx={{ maxWidth: 345 }}
            key={p._id}
            className="Card"
            component={motion.div}
            variants={card}
          >
            <CardMedia
              component={Image}
              image={p.image.url}
              alt={p.image.caption}
              width={100}
              height={100}
              sx={{ width: "100%", height: "150px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {p.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {p.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ width: "100%" }}>
              <Box className="Buttons">
                <Button
                  variant="outlined"
                  size="small"
                  className="Button"
                  endIcon={<EyeIcon />}
                >
                  DEMO
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  className="Button"
                  endIcon={<GitHubIcon />}
                >
                  Repo
                </Button>
              </Box>
            </CardActions>
          </Card>
        ))}
      </Cards>
    </Container>
  );
};
export default Projects;
