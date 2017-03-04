import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../shared/user/user.model';
import { AuthService } from '../shared/auth/auth.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  constructor(private authService:AuthService, private router:Router) { }

  private subscriptions: Array<Subscription> = [];
  private loginError:boolean = false;
  private user:User;

  ngOnInit(){
    this.user = new User;
  }

  ngOnDestroy(){
    for(let i = 0; i < this.subscriptions.length; i++){
      this.subscriptions[i].unsubscribe();
    }
  }

  onSubmit(): void{
    if(!(this.user.Username && this.user.Password)){
      this.loginError = true;
      return;
    }
    this.subscriptions.push(this.authService.login(this.user).subscribe(
      (data) => {
        localStorage.setItem("token", data.token);
        this.router.navigate(['/']);
      },
      (error:Response) => console.error(error)
    ));
  }

}
