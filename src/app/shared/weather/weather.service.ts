import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable()
export class WeatherService {

  constructor(private _http: Http){  }

  getWeatherByCity(city: string): Observable<any>{
    if(city != "" && city.length > 2){
      return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + environment.APP_ID + '&units=metric&lang=de')
        .map(response => response.json())
        .catch(error => {
          console.error(error);
          return Observable.throw(error.json());
        });
    }
  }

  getForecastByCity(city: string): Observable<any>{
    if(city != "" && city.length > 2){
      return this._http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=' + environment.APP_ID + '&units=metric&lang=de')
        .map(response => response.json())
        .catch(error => {
          console.error(error);
          return Observable.throw(error.json());
        });
    }
  }

	getWeatherForBerlin(): Observable<any>{
    return this._http.get('http://api.openweathermap.org/data/2.5/forecast/city?id=2950159&APPID=' + environment.APP_ID + '&units=metric&lang=de')
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });
	}
}
