import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../shared/weather.service";
import { Weather } from "../shared/weather.model";
import {Subject} from "rxjs";

@Component({
  selector: 'app-main-weather',
  templateUrl: './main-weather.component.html',
  styleUrls: ['./main-weather.component.scss']
})
export class MainWeatherComponent implements OnInit{

  private search = new Subject<string>();
  private weather: Weather;

  constructor(private weatherService: WeatherService) {
    this.weather = new Weather();
  }

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

  private handleWeatherInput(data: any): void{
    this.weather = new Weather();
    this.weather.setCity(data.city.name);
    for(let i = 0; i < data.list.length; i++){
      let tempDateArr:string[] = data.list[i].dt_txt.split("-");
      tempDateArr.push(tempDateArr[2].split(" ")[0]);
      let tempTime = tempDateArr[2].split(" ")[1];
      tempDateArr.splice(2, 1);
      let tempDate:string = tempDateArr[2] + "." + tempDateArr[1] + "." + tempDateArr[0];
      if(this.weather.getWeatherData().length === 0){
        this.weather.addWeatherData(tempDate);
      }
      if(tempDate !== this.weather.getWeatherData()[this.weather.getWeatherData().length-1].getDate()){
        this.weather.addWeatherData(tempDate);
      }
      for(let k = 0; k < this.weather.getWeatherData().length; k++){
        if(tempDate === this.weather.getWeatherData()[k].getDate()){
          let tmpIcon:string = "";
          if(data.list[i].weather[0].icon === "01d"){
            tmpIcon = "wi-night-clear";
          }else if(data.list[i].weather[0].icon === "01n"){
            tmpIcon = "wi-night-clear";
          }else if(data.list[i].weather[0].icon === "02d"){
            tmpIcon = "wi-day-sunny-overcast";
          }else if(data.list[i].weather[0].icon === "02n"){
            tmpIcon = "wi-night-partly-cloudy";
          }else if(data.list[i].weather[0].icon === "03d"){
            tmpIcon = "wi-cloudy";
          }else if(data.list[i].weather[0].icon === "03n"){
            tmpIcon = "wi-night-cloudy";
          }else if(data.list[i].weather[0].icon === "04d"){
            tmpIcon = "wi-cloud";
          }else if(data.list[i].weather[0].icon === "04n"){
            tmpIcon = "wi-night-alt-cloudy";
          }else if(data.list[i].weather[0].icon === "09d"){
            tmpIcon = "wi-day-showers";
          }else if(data.list[i].weather[0].icon === "09n"){
            tmpIcon = "wi-night-showers";
          }else if(data.list[i].weather[0].icon === "10d"){
            tmpIcon = "wi-day-rain";
          }else if(data.list[i].weather[0].icon === "10n"){
            tmpIcon = "wi-night-rain";
          }else if(data.list[i].weather[0].icon === "11d"){
            tmpIcon = "wi-day-thunderstorm";
          }else if(data.list[i].weather[0].icon === "11n"){
            tmpIcon = "wi-night-thunderstorm";
          }else if(data.list[i].weather[0].icon === "13d"){
            tmpIcon = "wi-day-snow";
          }else if(data.list[i].weather[0].icon === "13n"){
            tmpIcon = "wi-night-snow";
          }else if(data.list[i].weather[0].icon === "50d"){
            tmpIcon = "wi-day-fog";
          }else if(data.list[i].weather[0].icon === "50n"){
            tmpIcon = "wi-night-fog";
          }
          this.weather.getWeatherData()[k].addTemperature(tempTime, data.list[i].main.temp_min,
            data.list[i].main.temp_max, tmpIcon, data.list[i].weather[0].description);
        }
      }
    }
  }

}
