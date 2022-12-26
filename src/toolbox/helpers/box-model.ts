import { Theme, useTheme } from "@mui/material";

class Padding {
  constructor(private theme: Theme) {}
  build() {
    return {
      paddingLeft: {
        paddingLeft: 10,
        [this.theme.breakpoints.up("xs")]: {
          paddingLeft: 50,
        },
      },
      paddingRight: {
        paddingRight: 10,
        [this.theme.breakpoints.up("xs")]: {
          paddingRight: 50,
        },
      },
      paddingBottom: {
        paddingBottom: 10,
        [this.theme.breakpoints.up("xs")]: {
          paddingBottom: 20,
        },
      },
      paddingTop: {
        paddingTop: 10,
        [this.theme.breakpoints.up("xs")]: {
          paddingTop: 20,
        },
      },
    };
  }
}
class Margin {
  constructor(private theme: Theme) {}
  build() {
    return {
      marginLeft: {
        marginLeft: 10,
        [this.theme.breakpoints.up("xs")]: {
          marginLeft: 50,
        },
      },
      marginRight: {
        marginRight: 10,
        [this.theme.breakpoints.up("xs")]: {
          marginRight: 50,
        },
      },
      marginBottom: {
        marginBottom: 10,
        [this.theme.breakpoints.up("xs")]: {
          marginBottom: 20,
        },
      },
      marginTop: {
        marginTop: 10,
        [this.theme.breakpoints.up("xs")]: {
          marginTop: 20,
        },
      },
      marginBottomTitle: {
        marginBottom: 10,
        [this.theme.breakpoints.up("xs")]: {
          marginBottom: 20,
        },
      },
      marginTopTitle: {
        marginTop: 10,
        [this.theme.breakpoints.up("xs")]: {
          marginTop: 30,
        },
      },
    };
  }
}

export const getBoxModel = (theme: Theme) => {
  const padding = new Padding(theme).build();
  const margin = new Margin(theme).build();
  return {
    // margin,
    padding,
    margin,
  };
};
