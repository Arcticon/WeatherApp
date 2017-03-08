import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Headers, URLSearchParams } from '@angular/http';
import {Observable, Subject} from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user/user.model';

@Injectable()
export class AuthService {

  private loggedIn:Subject<boolean> = new Subject<boolean>();
  private loggedInUser:Subject<User> = new Subject<User>();
  private loggedInBoolean:boolean;

  constructor(private http: Http, private router:Router) {
    this.loggedIn.next(!!localStorage.getItem("token"));
    this.loggedInUser.next(new User());
    this.loggedInBoolean = !!localStorage.getItem("token");
  }

  login(user:User):Observable<any>{
      let headers = new Headers({'Content-Type': 'application/json'});

      return this.http.post(environment.backendURL + environment.backendURLLogin, user, {headers: headers})
        .map(response => response.json())
        .catch(error => {
          console.error(error);
          return Observable.throw(error.json());
        });
  }

  logout(){
    localStorage.clear();
    this.loggedIn.next(!!localStorage.getItem("token"));
    this.loggedInBoolean = !!localStorage.getItem("token");
    this.loggedInUser.next(new User());
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.post(environment.backendURL + environment.backendURLLogout, {headers: headers})
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });
    this.router.navigate(['login']);
  }

  get getToken(){
    return localStorage.getItem("token");
  }

  get isLoggedIn():Observable<any> {
    return this.loggedIn.asObservable();
  }

  getLoggedInUser(){
    return this.loggedInUser.asObservable();
  }

  setLoggedInUser(user:User){
    this.loggedInUser.next(user);
  }

  isLoggedInBoolean():boolean{
    return this.loggedInBoolean;
  }

  setLoggedInUserBoolean(val:boolean){
    this.loggedIn.next(val);
    this.loggedInBoolean = val;
  }

}
