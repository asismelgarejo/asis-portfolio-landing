import { HolderAnchor } from "@components/atoms";
import { SKILLS } from "@mocks/skills";
import {
  Box,
  Card,
  CardContent,
  Collapse,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useActiveSection } from "@toolbox/hooks";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container, ContainerSkills, SkillStats } from "./Skills.styled";
import { KeyboardArrowDown as ArrowIcon } from "@mui/icons-material";
import { Skill } from "@api/models/skills";
import { motion } from "framer-motion";
const Skills = () => {
  const { containerRef } = useActiveSection("skills");
  const theme = useTheme();
  const greaterOrEqualToSM = useMediaQuery(theme.breakpoints.up("md"));

  const [skillId, setSkillId] = useState("");

  const [skills, setSkills] = useState<Skill[][]>([]);
  const PERPAGE = 15;

  const transformIntoArrayOfArrays = (): Skill[][] => {
    const s = Array.from({ length: Math.ceil(SKILLS.length / PERPAGE) }).reduce(
      (p: any, n, idx) => {
        const offset = idx * PERPAGE;
        return [...p, SKILLS.slice(offset, offset + PERPAGE)];
      },
      []
    ) as Skill[][];
    return s;
  };

  const skillsAnimation = {
    loading: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2, delay: 100 },
    },
    loaded: {
      transition: { staggerChildren: 0.15 },
    },
  };
  const getSkillAnimation = (scale: number) => {
    return {
      loading: {
        width: "0%",
        transition: {
          x: { stiffness: 1000, velocity: -100 },
          opacity: { duration: 1 },
        },
      },
      loaded: {
        width: `${scale * 100}%`,
        transition: {
          x: { stiffness: 1000 },
          opacity: { duration: 1 },
        },
      },
    };
  };

  useEffect(() => {
    if (greaterOrEqualToSM) setSkills(transformIntoArrayOfArrays());
    else setSkills([SKILLS]);
  }, [greaterOrEqualToSM]);
  return (
    <Container ref={containerRef} component="section" className="p-b p-t">
      <HolderAnchor _id="skills" />
      <Typography component="h2" variant="h2" className="TitleSection m-b-t">
        Skills
      </Typography>
      <Divider />
      <ContainerSkills>
        {skills.map((ss, idx) => (
          <Box component="table" className="Table" key={idx}>
            <motion.div
              initial="loading"
              whileInView="loaded"
              variants={skillsAnimation}
            >
              {ss.map((skill) => (
                <Box component="tbody" key={skill._id}>
                  <Box
                    component="tr"
                    onClick={() =>
                      setSkillId((prev) =>
                        prev === skill._id ? "" : skill._id
                      )
                    }
                    sx={{
                      ...(skill._id === skillId
                        ? {
                            boxShadow: `0px 4px 5px 2px rgba(0,0,0,.4)`,
                          }
                        : {}),
                    }}
                  >
                    <Box component="td">
                      <Typography
                        component="h6"
                        variant="h6"
                        sx={{
                          display: "inline-block",
                          whiteSpace: "nowrap",
                          ...(skill._id === skillId
                            ? {
                                fontWeight: 500,
                              }
                            : {}),
                        }}
                      >
                        {skill.name}
                      </Typography>
                    </Box>
                    <Box component="td">
                      <SkillStats
                        scale={skill.domain}
                        className="Generic SkillStats"
                      >
                        <motion.div
                          variants={getSkillAnimation(skill.domain)}
                          style={{
                            height: "100%",
                            background: theme.palette.info.main,
                            display: "block",
                          }}
                        />
                      </SkillStats>
                    </Box>
                    <Box component="td">
                      <IconButton disableRipple>
                        <ArrowIcon
                          sx={{
                            ...(skill._id === skillId
                              ? {}
                              : { transform: "rotate(-180deg)" }),
                            transition: "all",
                          }}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                  <Box component="tr">
                    <Box component="td">
                      <Collapse in={skillId === skill._id}>
                        {skills[0] && (
                          <Image
                            src={skill.image.url}
                            alt={skill.image.caption}
                            width={100}
                            height={100}
                            className="SkillImage"
                          />
                        )}
                      </Collapse>
                    </Box>
                    <Box component="td" sx={{ minHeight: "50px" }}>
                      <Collapse
                        in={skillId === skill._id}
                        sx={{ width: "100%" }}
                      >
                        <CardContent className="CardContent">
                          <Typography component="p" variant="body2">
                            Nunc lobortis convallis orci at dapibus. Integer
                            vehicula mi in felis ultrices blandit. Donec
                            fermentum diam nec mi tincidunt pharetra.
                          </Typography>
                        </CardContent>{" "}
                      </Collapse>
                    </Box>
                    <Box component="td"></Box>
                  </Box>
                </Box>
              ))}
            </motion.div>
          </Box>
        ))}
      </ContainerSkills>
    </Container>
  );
};
export default Skills;
