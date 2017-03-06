import {Injectable} from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from "../auth/auth.service";

@Injectable()
export class isLoggedIn implements CanActivate {

  constructor(private authService:AuthService, private router:Router){}

  canActivate(){
    if(this.authService.isLoggedInBoolean() == true){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
