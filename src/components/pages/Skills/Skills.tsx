import { HolderAnchor } from "@components/atoms";
import { SKILLS } from "@mocks/skills";
import { Box, Collapse, Divider, IconButton, Typography } from "@mui/material";
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
import { Skill } from "@api//models/skills";
const Skills = () => {
  const { containerRef } = useActiveSection("skills");

  const [skillId, setSkillId] = useState("");

  const [skills, setSkills] = useState<Skill[][]>([]);
  const PERPAGE = 10;
  useEffect(() => {
    const s = Array.from({ length: Math.ceil(SKILLS.length / PERPAGE) }).reduce(
      (p: any, n, idx) => {
        const offset = idx * PERPAGE;
        return [...p, SKILLS.slice(offset, offset + PERPAGE)];
      },
      []
    ) as Skill[][];
    setSkills(s);
  }, []);
  return (
    <Container ref={containerRef} component="section">
      <HolderAnchor _id="skills" />
      <Typography component="h2" variant="h2" className="TitleSection">
        Skills
      </Typography>
      <Divider />
      <ContainerSkills>
        {skills.map((ss, idx) => (
          <SkillLote itemsLength={PERPAGE} key={idx}>
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
                  <ArrowIcon sx={{ ...(s._id === skillId ? {} : {transform: "rotate(-180deg)"}), transition: "all" }} />
                </IconButton>
                <Collapse in={s._id === skillId} className="Generic Collapse">
                  <Image
                    src={s.image.url}
                    alt={s.image.caption}
                    width={50}
                    height={50}
                    className="SkillImage"
                  />
                </Collapse>
                <Collapse in={s._id === skillId} className="Generic">
                  <Box>
                    <Typography>
                      Nunc lobortis convallis orci at dapibus. Integer vehicula
                      mi in felis ultrices blandit. Donec fermentum diam nec
                      ipsum tincidunt pharetra.{" "}
                    </Typography>
                  </Box>
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
