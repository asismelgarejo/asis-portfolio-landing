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
  LinearProgress,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useActiveSection } from "@toolbox/hooks";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container, ContainerSkills, FormControls } from "./Skills.styled";
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

  const levelsData =
    data.levels[0] && data.levels[1] ? [data.levels[0], data.levels[1]] : [];

  const [levels, setLevels] = useState<LevelModel[]>(levelsData);
  const [areas, setAreas] = useState<AreaModel[]>([]);
  const [name, setName] = useState<string>("");
  const [specializations, setSpecializations] = useState<SpecializationModel[]>(
    []
  );
  const [filters, setFilters] = useState<
    Partial<{
      levels: string[];
      areas: string[];
      specializations: string[];
      name: string;
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
    setLoaded(true);
  }, []);

  const [loaded, setLoaded] = useState(false);
  const [searchByTxt, setSearchByTxt] = useState(false);

  useEffect(() => {
    if (!loaded) return;
    if (!searchByTxt) return;
    const id = setTimeout(() => {
      mutateSkills.mutate({ name });
    }, 300);
    return () => clearTimeout(id);
  }, [name]);

  return (
    <Container ref={containerRef} component="section" className="p-b p-t">
      <HolderAnchor _id="skills" />
      <Typography component="h2" variant="h2" className="TitleSection m-b-t">
        Skills
      </Typography>
      <Divider />
      <TextField
        fullWidth
        value={name}
        onChange={(e) => {
          setFilters({ name: e.target.value });
          setName(e.target.value);
          setSearchByTxt(true);
          setLevels([]);
          setAreas([]);
          setSpecializations([]);
        }}
      />
      <br />
      <br />
      <FormControls>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Level</FormLabel>
          <br />
          <Autocomplete
            multiple
            id="tags-standard"
            options={data.levels}
            getOptionLabel={(option) => option.name}
            size="small"
            value={levels}
            filterSelectedOptions
            onChange={(event: React.SyntheticEvent, value: LevelModel[]) => {
              setName("");
              setSearchByTxt(false);
              if (value) {
                const levels = value.map((i) => i._id);
                setFilters((prev) => ({ ...prev, levels }));
                const updated = { ...filters, levels };
                delete updated?.name;
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
            filterSelectedOptions
            value={areas}
            onChange={(event: React.SyntheticEvent, value: AreaModel[]) => {
              setName("");
              setSearchByTxt(false);
              setFilters((prev) => ({ ...prev, areas }));
              const areas = value.map((i) => i._id);
              const updated = { ...filters, areas };
              delete updated?.name;
              mutateSkills.mutate(updated);
              setAreas(value ?? []);
            }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" name="areas" />
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
            value={specializations}
            filterSelectedOptions
            onChange={(
              event: React.SyntheticEvent,
              value: SpecializationModel[]
            ) => {
              setName("");
              setSearchByTxt(false);
              const specializations = value.map((i) => i._id);
              setFilters((prev) => ({ ...prev, specializations }));
              const updated = { ...filters, specializations };
              delete updated?.name;
              mutateSkills.mutate(updated);
              setSpecializations(value ?? []);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                name="specializations"
              />
            )}
          />
        </FormControl>
      </FormControls>
      <br />
      {/* {<LinearProgress />} */}
      {mutateSkills.isLoading && <LinearProgress />}
      <br />
      <ContainerSkills disabled={mutateSkills.isLoading}>
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
