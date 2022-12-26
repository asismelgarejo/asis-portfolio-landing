import { Theme } from "@mui/material";

interface MarginBuilder {
  mT(): MarginBuilder;
  mB(): MarginBuilder;
  mR(): MarginBuilder;
  mL(): MarginBuilder;
  mBT(): MarginBuilder;
  mTT(): MarginBuilder;
  build(): Record<string, any>;
}

export class Margin implements MarginBuilder {
  private xs?: Record<string, any> = {};
  private sm?: Record<string, any> = {};
  private md?: Record<string, any> = {};
  private lg?: Record<string, any> = {};

  constructor(private theme: Theme) {
    // this.Margin = new MarginBase();
  }

  mB(): MarginBuilder {
    this.xs = {
      ...this.xs,
      marginBottom: 10,
    };
    this.sm = {
      ...this.sm,
      marginBottom: 50,
    };
    return this;
  }
  mT(): MarginBuilder {
    this.xs = {
      ...this.xs,
      marginTop: 10,
    };
    this.sm = {
      ...this.sm,
      marginTop: 50,
    };
    return this;
  }

  mR(): MarginBuilder {
    this.xs = {
      ...this.xs,
      marginRight: 10,
    };
    this.sm = {
      ...this.sm,
      marginRight: 50,
    };
    return this;
  }
  mL(): MarginBuilder {
    this.xs = {
      ...this.xs,
      marginLeft: 10,
    };
    this.sm = {
      ...this.sm,
      marginLeft: 50,
    };
    return this;
  }
  mBT(): MarginBuilder {
    this.xs = {
      ...this.xs,
      marginBottom: 10,
    };
    this.sm = {
      ...this.sm,
      marginBottom: 20,
    };
    return this;
  }
  mTT(): MarginBuilder {
    this.xs = {
      ...this.xs,
      marginTop: 20,
    };
    this.sm = {
      ...this.sm,
      marginTop: 30,
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
