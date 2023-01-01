import { Theme } from "@mui/material";

interface PaddingBuilder {
  pT(p?: number): PaddingBuilder;
  pB(p?: number): PaddingBuilder;
  pR(p?: number): PaddingBuilder;
  pL(p?: number): PaddingBuilder;
  build(): Record<string, any>;
}

export class Padding implements PaddingBuilder {
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

  pR(p?: number): PaddingBuilder {
    this.xs = {
      ...this.xs,
      paddingRight: 20,
    };
    this.sm = {
      ...this.sm,
      paddingRight: p ?? 50,
    };
    return this;
  }
  pL(p?: number): PaddingBuilder {
    this.xs = {
      ...this.xs,
      paddingLeft: 20,
    };
    this.sm = {
      ...this.sm,
      paddingLeft: p ?? 50,
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
