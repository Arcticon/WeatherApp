import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../shared/weather.service";
import { Weather } from "../../shared/weather.model";
import {Subject} from "rxjs";
import clock = jasmine.clock;

@Component({
  selector: 'app-main-weather',
  templateUrl: 'main-weather.component.html',
  styleUrls: ['main-weather.component.scss']
})
export class MainWeatherComponent implements OnInit{

  private search = new Subject<string>();
  private weather: Weather;

  private clock = new Date();

  constructor(private weatherService: WeatherService) {  }

  ngOnInit(){
    this.search
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((input: string) => this.weatherService.getWeatherByCity(input))
      .subscribe(
        data => {
          this.handleWeatherInput(data);
        }
      );
  }

  onSearch(city: string): void{
    this.search.next(city);
  }

  private handleWeatherInput(data: any): void {
    let tmpIcon: string = "";
    if (data.weather[0].icon === "01d") {
      tmpIcon = "wi-night-clear";
    } else if (data.weather[0].icon === "01n") {
      tmpIcon = "wi-night-clear";
    } else if (data.weather[0].icon === "02d") {
      tmpIcon = "wi-day-sunny-overcast";
    } else if (data.weather[0].icon === "02n") {
      tmpIcon = "wi-night-partly-cloudy";
    } else if (data.weather[0].icon === "03d") {
      tmpIcon = "wi-cloudy";
    } else if (data.weather[0].icon === "03n") {
      tmpIcon = "wi-night-cloudy";
    } else if (data.weather[0].icon === "04d") {
      tmpIcon = "wi-cloud";
    } else if (data.weather[0].icon === "04n") {
      tmpIcon = "wi-night-alt-cloudy";
    } else if (data.weather[0].icon === "09d") {
      tmpIcon = "wi-day-showers";
    } else if (data.weather[0].icon === "09n") {
      tmpIcon = "wi-night-showers";
    } else if (data.weather[0].icon === "10d") {
      tmpIcon = "wi-day-rain";
    } else if (data.weather[0].icon === "10n") {
      tmpIcon = "wi-night-rain";
    } else if (data.weather[0].icon === "11d") {
      tmpIcon = "wi-day-thunderstorm";
    } else if (data.weather[0].icon === "11n") {
      tmpIcon = "wi-night-thunderstorm";
    } else if (data.weather[0].icon === "13d") {
      tmpIcon = "wi-day-snow";
    } else if (data.weather[0].icon === "13n") {
      tmpIcon = "wi-night-snow";
    } else if (data.weather[0].icon === "50d") {
      tmpIcon = "wi-day-fog";
    } else if (data.weather[0].icon === "50n") {
      tmpIcon = "wi-night-fog";
    }
    this.weather = new Weather(data.name, this.clock.toDateString(), data.main.temp, data.main.humidity, tmpIcon, data.weather[0].description, data.wind.deg);
  }

}
