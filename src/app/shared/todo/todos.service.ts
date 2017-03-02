import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class TodosService {

  private todos: any[] = [
    {
      id: 1,
      description: "asdf",
      done: false,
      urgent: false
    },
    {
      id: 2,
      description: "asdf2",
      done: false,
      urgent: true
    },
    {
      id: 3,
      description: "asdf3",
      done: false,
      urgent: false
    }
  ];

  constructor(private _http: Http){  }

  getTodos(){
    return this.todos;
  }

}
