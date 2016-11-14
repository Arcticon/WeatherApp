/**
 * Created by Arcticon on 11.11.2016.
 */

import { Routes, RouterModule } from "@angular/router";

import { TestComponent } from "./test/test.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { MainWeatherComponent } from "./main-weather/main-weather.component";

const appRoutes: Routes = [
  { path: '', component: TestComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'weather', component: MainWeatherComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
