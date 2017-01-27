import { Injectable } from '@angular/core';

@Injectable()
export class ApartmentService {

  constructor() { }

  private apartmentItems = [
    {
      id: 1,
      price: 1,
      name: "asdf",
      isBought: false
    }
  ];
  private apartmentItemsBought = [
    {
      id: 2,
      price: 1,
      name: "asdf",
      isBought: true
    }
  ];

  getApartmentItems(){
    return this.apartmentItems;
  }

  getApartmentItemsBought(){
    return this.apartmentItemsBought;
  }

  addApartmentItem(){

  }

  addApartmentItemBought(){

  }

}
