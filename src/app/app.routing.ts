/**
 * Created by Arcticon on 11.11.2016.
 */

import { Routes, RouterModule } from "@angular/router";

import { TestComponent } from "./test/test.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { MainWeatherComponent } from "./main-weather/main/main-weather.component";
import { HomeComponent } from "./home/home.component";
import { WeatherDetailsComponent } from "./main-weather/details/weather-details.component";
import { TodosComponent } from "./todos/todos.component";
import { ApartmentInfoComponent } from "./apartment-info/apartment-info.component";
import {isLoggedIn} from "./shared/canActivates/isLoggedIn";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [isLoggedIn] },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'weatherForecast', component: MainWeatherComponent, canActivate: [isLoggedIn]},
  { path: 'weatherForecast/details/:cityName', component: WeatherDetailsComponent, canActivate: [isLoggedIn]},
  { path: 'todos', component: TodosComponent, canActivate: [isLoggedIn]},
  { path: 'test', component: TestComponent, canActivate: [isLoggedIn]},
  { path: 'apartmentInfo', component: ApartmentInfoComponent, canActivate: [isLoggedIn]}
];

export const routing = RouterModule.forRoot(appRoutes);
