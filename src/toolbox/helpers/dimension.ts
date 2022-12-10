/**
 * HEADER:
 * - Height
 * - Common padding at sides
 * - No padding at top and bottom
 * CONTAINER SECTIONS:
 * - Common paddings at sides
 * - Common padding at top and bottom
 * - Common Margin at top and bottom
 * FOOTER
 * - Common paddings at sides
 * - Unique padding at top and bottom
 */

class WebsiteMeasuresBase {
  public paddingTop?: string;
  public paddingBottom?: string;
  public marginBottom?: string;
  public marginTop?: string;
  public paddingLeft?: string;
  public paddingRight?: string;
  public height?: number;
  constructor() {}
}

interface WebsiteMeasuresBuilder {
  pT(p?: string): WebsiteMeasuresBuilder;
  pB(p?: string): WebsiteMeasuresBuilder;
  pR(p?: string): WebsiteMeasuresBuilder;
  pL(p?: string): WebsiteMeasuresBuilder;
  mB(p?: string): WebsiteMeasuresBuilder;
  mT(p?: string): WebsiteMeasuresBuilder;
  headerHeight(p?: number): WebsiteMeasuresBuilder;
  mTitleB(p?: string): WebsiteMeasuresBuilder;
  mTitleT(p?: string): WebsiteMeasuresBuilder;
  build(): WebsiteMeasuresBase;
}

export class WebsiteMeasureBuilder implements WebsiteMeasuresBuilder {
  private website?: WebsiteMeasuresBase;
  constructor() {
    this.clear();
  }
  pB(p?: string | undefined): WebsiteMeasuresBuilder {
    if (p) this.website!.paddingTop = p;
    else this.website!.paddingTop = "50px";
    return this;
  }
  pT(p?: string | undefined): WebsiteMeasuresBuilder {
    if (p) this.website!.paddingBottom = p;
    else this.website!.paddingBottom = "50px";
    return this;
  }
  pR(p?: string | undefined): WebsiteMeasuresBuilder {
    if (p) this.website!.paddingRight = p;
    else this.website!.paddingRight = "50px";
    return this;
  }
  pL(p?: string | undefined): WebsiteMeasuresBuilder {
    if (p) this.website!.paddingLeft = p;
    else this.website!.paddingLeft = "50px";
    return this;
  }
  mT(p?: string | undefined): WebsiteMeasuresBuilder {
    if (p) this.website!.marginTop = p;
    else this.website!.marginTop = "20px";
    return this;
  }
  mB(p?: string | undefined): WebsiteMeasuresBuilder {
    if (p) this.website!.marginBottom = p;
    else this.website!.marginBottom = "20px";
    return this;
  }
  mTitleB(p?: string | undefined): WebsiteMeasuresBuilder {
    if (p) this.website!.marginBottom = p;
    else this.website!.marginBottom = "20px";
    return this;
  }
  mTitleT(p?: string | undefined): WebsiteMeasuresBuilder {
    if (p) this.website!.marginTop = p;
    else this.website!.marginTop = "40px";
    return this;
  }
  headerHeight(p?: number | undefined): WebsiteMeasuresBuilder {
    if (p) this.website!.height = p;
    else this.website!.height = 70;
    return this;
  }
  build(): WebsiteMeasuresBase {
    const website = this.website;
    // this.website = new WebsiteMeasuresBase();
    return website!;
  }
  private clear() {
    this.website = new WebsiteMeasuresBase();
  }
}
