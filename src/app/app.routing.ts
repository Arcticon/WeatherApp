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

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'weatherForecast', component: MainWeatherComponent},
  { path: 'weatherForecast/details/:cityName', component: WeatherDetailsComponent},
  { path: 'todos', component: TodosComponent},
  { path: 'test', component: TestComponent},
  { path: 'apartmentInfo', component: ApartmentInfoComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
