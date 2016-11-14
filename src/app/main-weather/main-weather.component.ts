import { Component, OnInit } from '@angular/core';

import { WeatherService } from "../shared/weather.service";
import { Weather } from "../shared/weather.model";

@Component({
  selector: 'app-main-weather',
  templateUrl: './main-weather.component.html',
  styleUrls: ['./main-weather.component.css']
})
export class MainWeatherComponent implements OnInit{

  private weather: Weather[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(){
    this.onButtonClickGetWeatherForBerlin();
    this.weather = this.weatherService.getWeather();
  }

  checkIfDisplayDay(item: Weather){
    return item.display;
  }

  onButtonClickGetWeatherForBerlin(){
    this.weatherService.getWeatherForBerlin()
      .subscribe(
        data => {
          console.log(data);
          let date: string[];
          let day: string[];
          let hh: string[];
          let mmss: string[];
          let icon: string;
          let tmpDay: string;
          let display: boolean;

          date = data.list[0].dt_txt.split("-");
          day = date[2].split(" ", 1);
          tmpDay = day[0];
          display = true;

          for (let i = 0; i < data.list.length; i++) {
            date = data.list[i].dt_txt.split("-");
            day = date[2].split(" ", 1);
            mmss = date[2].split(":");
            hh = mmss[0].split(" ");

            if(i > 0){
              display = !(tmpDay == day[0]);
            }

            if(day[0] != tmpDay){
              tmpDay = day[0];
            }

            if(data.list[i].weather[0].icon === "01d"){
              icon = "wi-night-clear";
            }else if(data.list[i].weather[0].icon === "01n"){
              icon = "wi-night-clear";
            }else if(data.list[i].weather[0].icon === "02d"){
              icon = "wi-day-sunny-overcast";
            }else if(data.list[i].weather[0].icon === "02n"){
              icon = "wi-night-partly-cloudy";
            }else if(data.list[i].weather[0].icon === "03d"){
              icon = "wi-cloudy";
            }else if(data.list[i].weather[0].icon === "03n"){
              icon = "wi-night-cloudy";
            }else if(data.list[i].weather[0].icon === "04d"){
              icon = "wi-cloud";
            }else if(data.list[i].weather[0].icon === "04n"){
              icon = "wi-night-alt-cloudy";
            }else if(data.list[i].weather[0].icon === "09d"){
              icon = "wi-day-showers";
            }else if(data.list[i].weather[0].icon === "09n"){
              icon = "wi-night-showers";
            }else if(data.list[i].weather[0].icon === "10d"){
              icon = "wi-day-rain";
            }else if(data.list[i].weather[0].icon === "10n"){
              icon = "wi-night-rain";
            }else if(data.list[i].weather[0].icon === "11d"){
              icon = "wi-day-thunderstorm";
            }else if(data.list[i].weather[0].icon === "11n"){
              icon = "wi-night-thunderstorm";
            }else if(data.list[i].weather[0].icon === "13d"){
              icon = "wi-day-snow";
            }else if(data.list[i].weather[0].icon === "13n"){
              icon = "wi-night-snow";
            }else if(data.list[i].weather[0].icon === "50d"){
              icon = "wi-day-fog";
            }else if(data.list[i].weather[0].icon === "50n"){
              icon = "wi-night-fog";
            }



            this.weatherService.addWeatherItem(new Weather(data.city.name,
              data.list[i].main.temp_min,
              data.list[i].main.temp_max,
              data.list[i].weather[0].description,
              day[0],
              date[1],
              date[0],
              hh[1],
              mmss[1],
              mmss[2],
              icon,
              display));
          }

        }
      );
    this.weather = this.weatherService.getWeather();
  }

}
