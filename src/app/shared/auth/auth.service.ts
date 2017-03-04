import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user/user.model';

@Injectable()
export class AuthService {

  constructor(private http: Http, private router:Router) { }

  login(user:User):Observable<any>{
      let headers = new Headers({'Content-Type': 'application/json'});

      return this.http.post(environment.backendURL + environment.backendURLLogin, user, {headers: headers})
        .map(response => response.json())
        .catch(error => {
          console.error(error);
          return Observable.throw(error.json());
        });

      /*

       .subscribe(
       (data) => {
       localStorage.setItem("token", data.token);
       },
       (error:Response) => console.error(error)
       )
       */
  }

  logout(user:User){
    // this.loggedInUser.next(this.emptyUser);
    localStorage.clear();
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.post(environment.backendURL + environment.backendURLLogout, JSON.stringify(user), {headers: headers})
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

  // getApartmentItems():Observable<ApartmentItem[]>{
  //   let headers = new Headers({'Content-Type': 'application/json'});
  //   return this.http.get(environment.backendURL + environment.backendURLApartment, {headers: headers})
  //     .map(response => response.json())
  //     .catch(error => {
  //       console.error(error);
  //       return Observable.throw(error.json());
  //     });
  // }
  //
  // getApartmentItemById(Id:number):Observable<ApartmentItem[]>{
  //   let headers = new Headers({'Content-Type': 'application/json'});
  //   return this.http.get(environment.backendURL + environment.backendURLApartment + "/" + Id, {headers: headers})
  //     .map(response => response.json())
  //     .catch(error => {
  //       console.error(error);
  //       return Observable.throw(error.json());
  //     });
  // }
  //
  // addApartmentItem(item:ApartmentItem):Observable<ApartmentItem>{
  //   let headers = new Headers({'Content-Type': 'application/json'});
  //   return this.http.post(environment.backendURL + environment.backendURLApartment, item, {headers: headers})
  //     .map(response => response.json())
  //     .catch(error => {
  //       console.error(error);
  //       return Observable.throw(error.json());
  //     });
  // }
  //
  // updateApartmentItemById(Id:number, item:ApartmentItem):Observable<ApartmentItem>{
  //   let headers = new Headers({'Content-Type': 'application/json'});
  //   return this.http.put(environment.backendURL + environment.backendURLApartment + "/" + Id, item, {headers: headers})
  //     .map(response => response.json())
  //     .catch(error => {
  //       console.error(error);
  //       return Observable.throw(error.json());
  //     });
  // }
  //
  // // delete user by id
  // deleteApartmentItem(Id:number): Observable<any>{
  //   let headers = new Headers({'Content-Type': 'application/json'});
  //   return this.http.delete(environment.backendURL + environment.backendURLApartment + "/" + Id, {headers: headers});
  // }

}
