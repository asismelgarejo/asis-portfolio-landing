import { Theme, useTheme } from "@mui/material";

interface PaddingBuilder {
  pT(): PaddingBuilder;
  pB(): PaddingBuilder;
  pR(): PaddingBuilder;
  pL(): PaddingBuilder;
  build():  Record<string, any>;
}

class Padding implements PaddingBuilder {
  private xs?: Record<string, any> = {};
  private sm?: Record<string, any> = {};
  private md?: Record<string, any> = {};
  private lg?: Record<string, any> = {};

  constructor(private theme: Theme) {
    // this.padding = new PaddingBase();
  }

  pB(): PaddingBuilder {
    this.xs = {
      ...this.xs,
      paddingBottom: 20,
    };
    this.sm = {
      ...this.sm,
      paddingBottom: 20,
    };
    return this;
  }
  pT(): PaddingBuilder {
    this.xs = {
      ...this.xs,
      paddingTop: 20,
    };
    this.sm = {
      ...this.sm,
      paddingTop: 20,
    };
    return this;
  }

  pR(): PaddingBuilder {
    this.xs = {
      ...this.xs,
      paddingRight: 20,
    };
    this.sm = {
      ...this.sm,
      paddingRight: 50,
    };
    return this;
  }
  pL(): PaddingBuilder {
    this.xs = {
      ...this.xs,
      paddingLeft: 20,
    };
    this.sm = {
      ...this.sm,
      paddingLeft: 50,
    };
    return this;
  }

  build() {
    return {
      [this.theme.breakpoints.up("xs")]: {
        ...this.xs,
      },
      [this.theme.breakpoints.up("sm")]: {
        ...this.sm,
      },
      [this.theme.breakpoints.up("md")]: {
        ...this.md,
      },
      [this.theme.breakpoints.up("lg")]: {
        ...this.lg,
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
        [this.theme.breakpoints.up("sm")]: {
          marginLeft: 50,
        },
      },
      marginRight: {
        marginRight: 10,
        [this.theme.breakpoints.up("sm")]: {
          marginRight: 50,
        },
      },
      marginBottom: {
        marginBottom: 10,
        [this.theme.breakpoints.up("sm")]: {
          marginBottom: 20,
        },
      },
      marginTop: {
        marginTop: 10,
        [this.theme.breakpoints.up("sm")]: {
          marginTop: 20,
        },
      },
      marginBottomTitle: {
        marginBottom: 10,
        [this.theme.breakpoints.up("sm")]: {
          marginBottom: 20,
        },
      },
      marginTopTitle: {
        marginTop: 10,
        [this.theme.breakpoints.up("sm")]: {
          marginTop: 30,
        },
      },
    };
  }
}

export const getBoxModel = (theme: Theme) => {
  const padding = new Padding(theme);
  const margin = new Margin(theme).build();
  return {
    // margin,
    padding,
    margin,
  };
};
