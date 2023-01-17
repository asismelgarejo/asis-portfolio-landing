import { Project } from "@api/models/projects";
import { HolderAnchor } from "@components/atoms";
import { PROJECTS } from "@mocks/projects";
import {
  RemoveRedEye as EyeIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { ProjectCardStyled } from "./Projects.styled";

type ProjectCardProps = {
  project: Project;
};
export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <>
      <Box sx={{ width: "100%", height: "150px", overflow: "hidden" }}>
        <Image
          src={project.image.url}
          alt={project.image.caption}
          width={600}
          height={600}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h6">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
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
    </>
  );
};
