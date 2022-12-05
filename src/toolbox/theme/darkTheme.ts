import { ThemeOptions } from "@mui/material";

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      paper: "#37393e",
      default:
        "linear-gradient(180deg, rgba(53,53,101,1) 0%, rgba(30,20,80,1) 99%);",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
  },
};
