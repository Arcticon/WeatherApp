import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../shared/user/user.model';
import { Response } from '@angular/http';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  constructor(private userService:UserService, private router:Router) { }

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
    this.subscriptions.push(this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      (error:Response) => console.error(error)
    ));
  }

}
