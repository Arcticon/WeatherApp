import { Weather } from "./weather.model";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
// import { Day } from "./day.model";
// import "rxjs";

@Injectable()
export class WeatherService {

  private weather: Weather[] = [];

  constructor(private _http: Http){
    // for(var i: number = 0; i < 6; i++) {
    //   this.weather[i] = [];
    //   for(var j: number = 0; j< 10; j++) {
    //     this.things[i][j] = new Thing();
    //   }
    // }
  }

  emptyWeatherData(){
    if(this.weather.length > 0){
      this.weather.splice(0, this.weather.length);
    }
  }

  addWeatherItem(item: Weather){
    this.weather.push(item);
  }

  getWeatherByCity(city: string): Observable<any>{
    if(city != "" && city.length > 2){
      this.emptyWeatherData();
      return this._http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=17686e49eed56c343fe6106c44a232ed&units=metric&lang=de')
        .map(response => response.json())
        .catch(error => {
          console.error(error);
          return Observable.throw(error.json());
        });
    }

  }

	getWeatherForBerlin(): Observable<any>{
    this.emptyWeatherData();
    return this._http.get('http://api.openweathermap.org/data/2.5/forecast/city?id=2950159&APPID=17686e49eed56c343fe6106c44a232ed&units=metric&lang=de')
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });
	}

	getWeather(){
    return this.weather;
  }
}
