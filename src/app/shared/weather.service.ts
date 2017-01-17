import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";

@Injectable()
export class WeatherService {

  constructor(private _http: Http){  }

  getWeatherByCity(city: string): Observable<any>{
    if(city != "" && city.length > 2){
      return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=17686e49eed56c343fe6106c44a232ed&units=metric&lang=de')
        .map(response => response.json())
        .catch(error => {
          console.error(error);
          return Observable.throw(error.json());
        });
    }
  }

  getForecastByCity(city: string): Observable<any>{
    if(city != "" && city.length > 2){
      return this._http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=17686e49eed56c343fe6106c44a232ed&units=metric&lang=de')
        .map(response => response.json())
        .catch(error => {
          console.error(error);
          return Observable.throw(error.json());
        });
    }
  }

	getWeatherForBerlin(): Observable<any>{
    return this._http.get('http://api.openweathermap.org/data/2.5/forecast/city?id=2950159&APPID=17686e49eed56c343fe6106c44a232ed&units=metric&lang=de')
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });
	}
}
