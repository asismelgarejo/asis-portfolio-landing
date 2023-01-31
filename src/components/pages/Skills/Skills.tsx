import { HolderAnchor } from "@components/atoms";
import {
  Autocomplete,
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useActiveSection } from "@toolbox/hooks";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container, ContainerSkills } from "./Skills.styled";
import {
  LevelModel,
  SkillModel,
  AreaModel,
  SpecializationModel,
} from "@api/models";
import { useMutationSkills } from "src/hooks";

type SkillsProps = {
  data: {
    levels: LevelModel[];
    areas: AreaModel[];
    specializations: SpecializationModel[];
  };
};
const Skills: React.FC<SkillsProps> = ({ data }) => {
  const { containerRef } = useActiveSection("skills");
  const [levels, setLevels] = useState<LevelModel[]>([data.levels[0]]);

  const [filters, setFilters] = useState<
    Partial<{
      levels: string[];
      areas: string[];
      specializations: string[];
    }>
  >({});
  const [skills, setSkills] = useState<SkillModel[]>([]);

  const mutateSkills = useMutationSkills({
    onSuccess(response) {
      setSkills(response.data);
    },
  });

  useEffect(() => {
    mutateSkills.mutate({ levels: [levels[0]._id] });
    setFilters((prev) => ({ ...prev, levels: [levels[0]._id] }));
  }, []);

  return (
    <Container ref={containerRef} component="section" className="p-b p-t">
      <HolderAnchor _id="skills" />
      <Typography component="h2" variant="h2" className="TitleSection m-b-t">
        Skills
      </Typography>
      <Divider />
      <TextField fullWidth />
      <br />
      <br />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          columnGap: "10px",
        }}
      >
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Level</FormLabel>
          <br />
          <Autocomplete
            multiple
            id="tags-standard"
            options={data.levels}
            getOptionLabel={(option) => option.name}
            size="small"
            // defaultValue={[data.levels[0]]}
            value={levels}
            filterSelectedOptions
            onChange={(event: React.SyntheticEvent, value: LevelModel[]) => {
              if (value) {
                const levels = value.map((i) => i._id);
                setFilters((prev) => ({ ...prev, levels }));
                const updated = { ...filters, levels };
                mutateSkills.mutate(updated);
              } else {
                mutateSkills.mutate({});
              }
              setLevels(value ?? []);
            }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" />
            )}
          />
        </FormControl>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Areas</FormLabel>
          <br />
          <Autocomplete
            multiple
            id="tags-standard"
            options={data.areas}
            getOptionLabel={(option) => option.name}
            size="small"
            // defaultValue={[data.areas[0]]}
            filterSelectedOptions
            onChange={(event: React.SyntheticEvent, value: AreaModel[]) => {
              const areas = value.map((i) => i._id);
              setFilters((prev) => ({ ...prev, areas }));
              const updated = { ...filters, areas };
              mutateSkills.mutate(updated);
            }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" />
            )}
          />
        </FormControl>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Specialization</FormLabel>
          <br />
          <Autocomplete
            multiple
            id="tags-standard"
            options={data.specializations}
            getOptionLabel={(option) => option.name}
            size="small"
            // defaultValue={[data.specializations[0]]}
            filterSelectedOptions
            onChange={(
              event: React.SyntheticEvent,
              value: SpecializationModel[]
            ) => {
              const specializations = value.map((i) => i._id);
              setFilters((prev) => ({ ...prev, specializations }));
              const updated = { ...filters, specializations };
              mutateSkills.mutate(updated);
            }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" />
            )}
          />
        </FormControl>
      </Box>
      <br />
      <ContainerSkills>
        {skills.map((skill) => (
          <Card key={skill._id} className="Card">
            <CardContent className="CardContent">
              <Image
                src={skill.image.url}
                width="100"
                height="100"
                alt={skill.image.alt}
                className={"CardImage"}
                onDragStart={(e) => e.preventDefault()}
              />
              <Box className="CardDescription">
                <Typography
                  variant="caption"
                  component="span"
                  sx={{ fontSize: "14px !important" }}
                >
                  Level:
                </Typography>
                &ensp;
                <Typography
                  variant="caption"
                  component="span"
                  fontWeight={900}
                  sx={{ fontSize: "14px !important" }}
                >
                  {skill.level.name}
                </Typography>
              </Box>
            </CardContent>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" component="span" fontWeight={900}>
                {skill.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </ContainerSkills>
    </Container>
  );
};
export default Skills;

// const greaterOrEqualToSM = useMediaQuery(theme.breakpoints.up("md"));

// const [skillId, setSkillId] = useState("");

// const [skills, setSkills] = useState<SkillModel[][]>([]);
// const PERPAGE = 20;

// const transformIntoArrayOfArrays = (): SkillModel[][] => {
//   const s = Array.from({ length: Math.ceil(data.length / PERPAGE) }).reduce(
//     (p: any, n, idx) => {
//       const offset = idx * PERPAGE;
//       return [...p, data.slice(offset, offset + PERPAGE)];
//     },
//     []
//   ) as SkillModel[][];
//   return s;
// };

// const skillsAnimation = {
//   loading: {
//     transition: { staggerChildren: 0.15, delayChildren: 0.2, delay: 100 },
//   },
//   loaded: {
//     transition: { staggerChildren: 0.15 },
//   },
// };
// const getSkillAnimation = (scale: number) => {
//   if (!greaterOrEqualToSM)
//     return {
//       loading: {},
//       loaded: {},
//     };
//   return {
//     loading: {
//       width: "0%",
//       transition: {
//         x: { stiffness: 1000, velocity: -100 },
//         opacity: { duration: 1 },
//       },
//     },
//     loaded: {
//       width: `${scale * 100}%`,
//       transition: {
//         x: { stiffness: 1000 },
//         opacity: { duration: 1 },
//       },
//     },
//   };
// };

// useEffect(() => {
//   if (greaterOrEqualToSM) setSkills(transformIntoArrayOfArrays());
//   else setSkills([data]);
// }, [greaterOrEqualToSM]);
