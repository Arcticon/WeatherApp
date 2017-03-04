import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers():Observable<User[]>{
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get(environment.backendURL + environment.backendURLUser, {headers: headers})
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });
  }

  // getUserById(Id:number):Observable<User[]>{
  //   let headers = new Headers({'Content-Type': 'application/json'});
  //   return this.http.get(environment.backendURL + environment.backendURLUser + "/" + Id, {headers: headers})
  //     .map(response => response.json())
  //     .catch(error => {
  //       console.error(error);
  //       return Observable.throw(error.json());
  //     });
  // }

  addUser(item:User):Observable<User>{
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(environment.backendURL + environment.backendURLUser, item, {headers: headers})
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });
  }

  // updateApartmentItemById(Id:number, item:ApartmentItem):Observable<ApartmentItem>{
  //   let headers = new Headers({'Content-Type': 'application/json'});
  //   return this.http.put(environment.backendURL + environment.backendURLApartment + "/" + Id, item, {headers: headers})
  //     .map(response => response.json())
  //     .catch(error => {
  //       console.error(error);
  //       return Observable.throw(error.json());
  //     });
  // }

  // // delete user by id
  // deleteApartmentItem(Id:number): Observable<any>{
  //   let headers = new Headers({'Content-Type': 'application/json'});
  //   return this.http.delete(environment.backendURL + environment.backendURLApartment + "/" + Id, {headers: headers});
  // }

}
