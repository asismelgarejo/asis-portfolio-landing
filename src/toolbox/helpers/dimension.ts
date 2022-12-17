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
  public paddingTop?: number;
  public paddingBottom?: number;
  public marginBottom?: number;
  public marginTop?: number;
  public paddingLeft?: number;
  public paddingRight?: number;
  public height?: number;
  constructor() {}
}

interface WebsiteMeasuresBuilder {
  pT(p?: number): WebsiteMeasuresBuilder;
  pB(p?: number): WebsiteMeasuresBuilder;
  pR(p?: number): WebsiteMeasuresBuilder;
  pL(p?: number): WebsiteMeasuresBuilder;
  mB(p?: number): WebsiteMeasuresBuilder;
  mT(p?: number): WebsiteMeasuresBuilder;
  headerHeight(p?: number): WebsiteMeasuresBuilder;
  mTitleB(p?: number): WebsiteMeasuresBuilder;
  mTitleT(p?: number): WebsiteMeasuresBuilder;
  build(): WebsiteMeasuresBase;
}

export class WebsiteMeasureBuilder implements WebsiteMeasuresBuilder {
  private website?: WebsiteMeasuresBase;
  constructor() {
    this.clear();
  }
  pB(p?: number | undefined): WebsiteMeasuresBuilder {
    if (p) this.website!.paddingTop = p;
    else this.website!.paddingTop = 50;
    return this;
  }
  pT(p?: number | undefined): WebsiteMeasuresBuilder {
    if (p) this.website!.paddingBottom = p;
    else this.website!.paddingBottom = 50;
    return this;
  }
  pR(p?: number | undefined): WebsiteMeasuresBuilder {
    if (p) this.website!.paddingRight = p;
    else this.website!.paddingRight = 50;
    return this;
  }
  pL(p?: number | undefined): WebsiteMeasuresBuilder {
    if (p) this.website!.paddingLeft = p;
    else this.website!.paddingLeft = 50;
    return this;
  }
  mT(p?: number | undefined): WebsiteMeasuresBuilder {
    if (p) this.website!.marginTop = p;
    else this.website!.marginTop = 20;
    return this;
  }
  mB(p?: number | undefined): WebsiteMeasuresBuilder {
    if (p) this.website!.marginBottom = p;
    else this.website!.marginBottom = 20;
    return this;
  }
  mTitleB(p?: number | undefined): WebsiteMeasuresBuilder {
    if (p) this.website!.marginBottom = p;
    else this.website!.marginBottom = 20;
    return this;
  }
  mTitleT(p?: number | undefined): WebsiteMeasuresBuilder {
    if (p) this.website!.marginTop = p;
    else this.website!.marginTop = 40;
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
