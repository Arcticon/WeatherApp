/**
 * Created by Arcticon on 17.01.2017.
 */

import { ForecastData } from "./forecastData.model";

export class Forecast {
  private city: string;
  private forecastData: ForecastData[];

  constructor() {
    this.forecastData = [];
  }

  setCity(city: string): void{
    this.city = city;
  }

  getCity(): string{
    return this.city;
  }

  getForecastData(): ForecastData[]{
    return this.forecastData;
  }

  addForecastData(date: string): void{
    this.forecastData.push(new ForecastData(date));
  }

}
