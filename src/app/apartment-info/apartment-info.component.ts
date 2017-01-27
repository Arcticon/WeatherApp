import { Component, OnInit } from '@angular/core';
import { ApartmentService } from "../shared/apartment.service";

@Component({
  selector: 'app-apartment-info',
  templateUrl: './apartment-info.component.html',
  styleUrls: ['./apartment-info.component.scss']
})
export class ApartmentInfoComponent implements OnInit {

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.apartmentItems = this.apartmentService.getApartmentItems();
    this.apartmentItemsBought = this.apartmentService.getApartmentItemsBought();
    this.sumItems = this.calculateTotalSumOfItems(this.apartmentItems);
    this.sumItemsBought = this.calculateTotalSumOfItems(this.apartmentItemsBought);
  }

  private apartmentItems = [];
  private apartmentItemsBought = [];
  private sumItems = 0;
  private sumItemsBought = 0;


  private calculateTotalSumOfItems(items: any[]){
    let sum = 0;
    for(let i = 0; i < items.length; i++){
      sum += items[i].price;
    }
    return sum;
  }

}
