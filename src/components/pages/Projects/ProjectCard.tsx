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
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { ProjectCardStyled } from "./Projects.styled";

type ProjectCardProps = {
  project: Project;
};
export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <ProjectCardStyled>
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
        <Box
          sx={{
            flexWrap: "wrap",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          {project.tags.map((t) => (
            <Chip
              label={t}
              color="primary"
              variant="outlined"
              size="small"
              sx={{ margin: ".5em 0" }}
            />
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardContent sx={{ width: "100%" }}>
        <Box className="Buttons">
          <Button
            variant="outlined"
            size="small"
            className="Button"
            endIcon={<EyeIcon />}
            component="a"
            target="_blank"
            href={project.demo}
          >
            DEMO
          </Button>
          <Button
            variant="outlined"
            size="small"
            className="Button"
            endIcon={<GitHubIcon />}
            component="a"
            target="_blank"
            href={project.repo}
          >
            Repo
          </Button>
        </Box>
      </CardContent>
    </ProjectCardStyled>
  );
};
