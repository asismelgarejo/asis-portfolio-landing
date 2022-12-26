import { ThemeOptions } from "@mui/material";
import { Roboto } from "@next/font/google";

const roboto = Roboto({ weight: ["400", "700"] });


export const darkTheme: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 12,
  },
  palette: {
    mode: "dark",
    background: {
      paper: "#0B0D21",
      default:
        "linear-gradient(180deg, rgba(53,53,101,1) 0%, rgba(30,20,80,1) 99%);",
    },
    common: {
      black: "#fff",
      white: "#666",
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
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.Logo": {
            // fontSize: "50px",
            color: "#fff",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        "outlined":{
          border: "2px solid black",
          color: "black",
          fontWeight: 700
        },
        "contained":{
          
        },
        root: {
          "&.Logo": {
            // fontSize: "50px",
            color: "#fff",
          },
        },
      },
    },
  },
};
