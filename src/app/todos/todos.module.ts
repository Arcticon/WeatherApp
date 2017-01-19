import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { DetailsComponent } from './details/details.component';
import {TodosService} from "../shared/todos.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TodosComponent,
    DetailsComponent
  ],
  providers: [
    TodosService
  ]
})
export class TodosModule { }
