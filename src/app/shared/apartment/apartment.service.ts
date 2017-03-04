import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { ApartmentItem } from './apartmentitem';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ApartmentService {

  constructor(private http: Http, private authService:AuthService) { }

  getApartmentItems():Observable<ApartmentItem[]>{
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authService.getToken);
    return this.http.get(environment.backendURL + environment.backendURLApartment, {headers: headers})
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });
  }

  getApartmentItemById(Id:number):Observable<ApartmentItem[]>{
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authService.getToken);
    return this.http.get(environment.backendURL + environment.backendURLApartment + "/" + Id, {headers: headers})
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });
  }

  addApartmentItem(item:ApartmentItem):Observable<ApartmentItem>{
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authService.getToken);
    return this.http.post(environment.backendURL + environment.backendURLApartment, item, {headers: headers})
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });
  }

  updateApartmentItemById(Id:number, item:ApartmentItem):Observable<ApartmentItem>{
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authService.getToken);
    return this.http.put(environment.backendURL + environment.backendURLApartment + "/" + Id, item, {headers: headers})
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });
  }

  // delete user by id
  deleteApartmentItem(Id:number): Observable<any>{
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', this.authService.getToken);
    return this.http.delete(environment.backendURL + environment.backendURLApartment + "/" + Id, {headers: headers});
  }

}
