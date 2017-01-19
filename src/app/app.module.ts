import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { WeatherModule }        from './main-weather/weather.module';
import { TodosModule }          from "./todos/todos.module";

import { AppComponent }         from './app.component';
import { NavbarComponent }      from './navbar/navbar.component';
import { FooterComponent }      from './footer/footer.component';
import { routing }              from "./app.routing";
import { TestComponent }        from './test/test.component';
import { LoginComponent }       from './login/login.component';
import { RegisterComponent }    from './register/register.component';
import { WeatherService }       from "./shared/weather.service";
import { HomeComponent }        from './home/home.component';
import { TestnavbarComponent }  from './testnavbar/testnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TestComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TestnavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    WeatherModule,
    TodosModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
