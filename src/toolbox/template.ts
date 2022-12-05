export type Paddings = {
  paddingLeft: string;
  paddingTop: string;
  paddingBottom: string;
  paddingRight: string;
};
type Units = "px";
class Template {
  private size: number = 40;
  private paddingTop: number = 0;
  private paddingRight: number = this.size;
  private paddingBottom: number = 0;
  private paddingLeft: number = this.size;
  private unit: Units = "px";

  setUnit(u: Units) {
    this.unit = u;
  }
  get paddings(): Paddings {
    return {
      paddingTop: `${this.paddingTop}${this.unit}`,
      paddingRight: `${this.paddingRight}${this.unit}`,
      paddingBottom: `${this.paddingBottom}${this.unit}`,
      paddingLeft: `${this.paddingLeft}${this.unit}`,
    };
  }
  changeSize(s: number) {
    this.size = s;
    this.pT = s;
    this.pR = s;
    this.pB = s;
    this.pL = s;
  }
  get gSize(){
    return this.size
  }

  get pT() {
    return this.paddingTop;
  }
  set pT(s: number) {
    this.paddingTop = s;
  }
  setAll() {
    this.paddingTop = this.size;
    this.paddingRight = this.size;
    this.paddingBottom = this.size;
    this.paddingLeft = this.size;
  }
  get pR() {
    return this.paddingTop;
  }
  set pR(s: number) {
    this.paddingRight = s;
  }
  get pB() {
    return this.paddingTop;
  }
  set pB(s: number) {
    this.paddingBottom = s;
  }
  get pL() {
    return this.paddingTop;
  }
  set pL(s: number) {
    this.paddingLeft = s;
  }
}
export const template = new Template();
