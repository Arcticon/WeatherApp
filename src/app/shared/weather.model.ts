import { WeatherData } from "./weatherData.model";

export class Weather {
	private city: string;
	private weatherData: WeatherData[];

	constructor() {
		this.weatherData = [];
	}

	setCity(city: string): void{
    this.city = city;
  }

	getCity(): string{
	  return this.city;
  }

  getWeatherData(): WeatherData[]{
	  return this.weatherData;
  }

	addWeatherData(date: string): void{
    this.weatherData.push(new WeatherData(date));
  }

}
