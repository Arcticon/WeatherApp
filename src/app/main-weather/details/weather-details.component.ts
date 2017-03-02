import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../shared/weather/weather.service";
import { Forecast } from "../../shared/weather/forecast.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-weather-details',
  templateUrl: 'weather-details.component.html',
  styleUrls: ['weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  private forecast: Forecast;
  private sub: any;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) {
    this.forecast = new Forecast();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let cityName = params['cityName'];

      // console.log(this.weatherService.getForecastByCity(cityName));

      this.weatherService.getForecastByCity(cityName).subscribe(data => {
        this.handleForecastInput(data);
      });

      // this.handleForecastInput(this.weatherService.getForecastByCity(cityName));
    });
  }

  private handleForecastInput(data: any): void{
    this.forecast = new Forecast();
    this.forecast.setCity(data.city.name);
    for(let i = 0; i < data.list.length; i++){
      let tempDateArr:string[] = data.list[i].dt_txt.split("-");
      tempDateArr.push(tempDateArr[2].split(" ")[0]);
      let tempTime = tempDateArr[2].split(" ")[1];
      tempDateArr.splice(2, 1);
      let tempDate:string = tempDateArr[2] + "." + tempDateArr[1] + "." + tempDateArr[0];
      if(this.forecast.getForecastData().length === 0){
        this.forecast.addForecastData(tempDate);
      }
      if(tempDate !== this.forecast.getForecastData()[this.forecast.getForecastData().length-1].getDate()){
        this.forecast.addForecastData(tempDate);
      }
      for(let k = 0; k < this.forecast.getForecastData().length; k++){
        if(tempDate === this.forecast.getForecastData()[k].getDate()){
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
          this.forecast.getForecastData()[k].addTemperature(tempTime, data.list[i].main.temp_min,
            data.list[i].main.temp_max, tmpIcon, data.list[i].weather[0].description);
        }
      }
    }
  }

}
