import { ThemeOptions } from "@mui/material";



const LogoStyles = {

}

export const darkTheme: ThemeOptions = {
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
          "&.Logo":{
            fontSize: "50px",
            color: "#fff"
          }
        },
      },
    }
  },
};
