import { HolderAnchor } from "@components/atoms";
import { SKILLS } from "@mocks/skills";
import {
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
import {
  Container,
  ContainerSkills,
  SkillLote,
  SkillStats,
} from "./Skills.styled";
import { KeyboardArrowDown as ArrowIcon } from "@mui/icons-material";
import { Skill } from "@api/models/skills";
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
      <ContainerSkills className="m-t-t">
        {skills.map((ss, idx, a) => (
          <SkillLote itemsLength={ss.length} key={idx}>
            {ss.map((s) => (
              <React.Fragment key={s._id}>
                <Typography
                  className="Generic SkillName"
                  component="h6"
                  variant="h6"
                >
                  {s.name}
                </Typography>
                <SkillStats
                  scale={s.domain}
                  className="Generic SkillStats"
                  color={s.color}
                />
                <IconButton
                  className="Generic"
                  onClick={() =>
                    setSkillId((prev) => (prev === s._id ? "" : s._id))
                  }
                >
                  <ArrowIcon
                    sx={{
                      ...(s._id === skillId
                        ? {}
                        : { transform: "rotate(-180deg)" }),
                      transition: "all",
                    }}
                  />
                </IconButton>
                <Collapse in={s._id === skillId} className="Generic Collapse">
                  <Image
                    src={s.image.url}
                    alt={s.image.caption}
                    width={100}
                    height={100}
                    className="SkillImage"
                  />
                </Collapse>
                <Collapse
                  in={s._id === skillId}
                  className="Generic"
                  component={Card}
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <CardContent>
                    <Typography component="p" variant="body2">
                      Nunc lobortis convallis orci at dapibus. Integer vehicula
                      mi in felis ultrices blandit. Donec fermentum diam nec mi
                      tincidunt pharetra.
                    </Typography>
                  </CardContent>
                </Collapse>
              </React.Fragment>
            ))}
          </SkillLote>
        ))}
      </ContainerSkills>
    </Container>
  );
};
export default Skills;
