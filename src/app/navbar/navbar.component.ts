import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from "../shared/auth/auth.service";
import {Subscription} from "rxjs";
import {Response} from "@angular/http";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  constructor(private authService:AuthService) {
  }

  private subscriptions: Array<Subscription> = [];
  private isLoggedIn:boolean = false;

  ngOnInit() {
    // this.isLoggedIn = !!localStorage.getItem("token");
    this.subscriptions.push(this.authService.isLoggedIn().subscribe(
      (data) => {
        console.log(data);
        this.isLoggedIn = data;
      },
      (err:Response) => console.error(err)
    ));
  }

  ngOnDestroy(){
    for(let i = 0; i < this.subscriptions.length; i++){
      this.subscriptions[i].unsubscribe();
    }
  }

  private logout(){
    this.authService.logout();
  }

}
