/**
 * Created by Arcticon on 11.11.2016.
 */

import { Routes, RouterModule } from "@angular/router";

import { TestComponent } from "./test/test.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { MainWeatherComponent } from "./main-weather/main-weather.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'weatherForecast', component: MainWeatherComponent},
  { path: 'test', component: TestComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
