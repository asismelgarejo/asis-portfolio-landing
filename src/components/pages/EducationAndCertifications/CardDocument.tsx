import { EducationAndCertification } from "@api/models";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { format } from "date-fns";

type CardDocumentProps = {
  doc: EducationAndCertification;
};
export const CardDocument: React.FC<CardDocumentProps> = ({ doc }) => {
  const getDate = () => {
    let msg = "";
    if (doc.start_date) msg += `${format(doc.start_date, "yyyy")} - `;
    msg += format(doc.end_date, "yyyy");
    return msg;
  };
  return (
    <>
      <Image
        height={100}
        width={100}
        src={doc.image.url}
        alt={doc.image.label}
      />
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        <Typography component="h6" variant="h6" sx={{ fontWeight: 400 }}>
          {doc.title}
        </Typography>
        <Box className="Captions">
          <Typography component="small" className="Caption" variant="caption">
            {getDate()}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};
