export class Temperature {
  private time: string;
  private tempLow: number;
  private tempHigh: number;
  private icon: string;
  private description: string;

  constructor(time: string, tempLow: number, tempHigh: number, icon: string, description: string) {
    this.time = time;
    this.tempLow = tempLow;
    this.tempHigh = tempHigh;
    this.icon = icon;
    this.description = description;
  }

  getTime(): string{
    return this.time;
  }

  getTempLow(): number{
    return this.tempLow;
  }

  getTempHigh(): number{
    return this.tempHigh;
  }

  getIcon(): string{
    return this.icon;
  }

  getDescription(): string{
    return this.description;
  }

}
