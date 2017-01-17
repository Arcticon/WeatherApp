/**
 * Created by Arcticon on 17.01.2017.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MainWeatherComponent } from "./main/main-weather.component";
import { WeatherDetailsComponent } from "./details/weather-details.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  declarations: [
    MainWeatherComponent,
    WeatherDetailsComponent
  ]

})
export class WeatherModule { }
