import { Temperature } from "./temperatures.model";

export class WeatherData {
  private date: string;
  private temperatures: Temperature[] = [];

  constructor(date: string) {
    this.date = date;
    this.temperatures = [];
  }

  getDate(): string{
    return this.date;
  }

  getTemperatures(): Temperature[]{
    return this.temperatures;
  }

  addTemperature(time: string, tempLow: number, tempHigh: number, icon: string, description: string): void{
    this.temperatures.push(new Temperature(time, tempLow, tempHigh, icon, description));
  }

}
