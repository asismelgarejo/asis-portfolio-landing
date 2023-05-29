import { Job } from "@api/models";
import { Box, Typography } from "@mui/material";
import React from "react";
import * as format from "date-fns";
import * as locale from "date-fns/locale";

type WorkExperienceCardProps = {
  job: Job;
};
export const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  job,
}) => (
  <>
    <Typography component="h6" variant="h6" sx={{ fontWeight: 400 }}>
      {job.role}
    </Typography>
    <Typography variant="caption" component="span">
      {format.format(job.startDate, "MMMM yyyy", {
        locale: locale.enUS,
      })}
      &ensp;-&ensp;
      {job?.endDate
        ? format.format(job.endDate, "MMMM yyyy", {
            locale: locale.enUS,
          })
        : "Currently"}
    </Typography>
    <Typography variant="body2" component="p">
      {job.description}
    </Typography>
  </>
);
