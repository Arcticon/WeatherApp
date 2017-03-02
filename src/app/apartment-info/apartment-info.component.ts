import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { ApartmentService } from "../shared/apartment/apartment.service";
import { ApartmentItem } from '../shared/apartment/apartmentitem';

@Component({
  selector: 'app-apartment-info',
  templateUrl: './apartment-info.component.html',
  styleUrls: ['./apartment-info.component.scss']
})
export class ApartmentInfoComponent implements OnInit {

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.apartmentService.getApartmentItems().subscribe(
      (apartmentItems:ApartmentItem[]) => {
        this.apartmentItems = apartmentItems.filter(this.isOfTypeNotDone);
        this.apartmentItemsBought = apartmentItems.filter(this.isOfTypeDone);
        this.sumItems = this.calculateTotalSumOfItems(this.apartmentItems);
        this.sumItemsBought = this.calculateTotalSumOfItems(this.apartmentItemsBought);
      },
      (error:Response) => console.error(error)
    );
  }

  private apartmentItems:ApartmentItem[] = [];
  private apartmentItemsBought:ApartmentItem[] = [];
  private sumItems = 0;
  private sumItemsBought = 0;

  private isOfTypeNotDone(item): boolean{
    return item.Done === 0;
  }

  private isOfTypeDone(item): boolean{
    return item.Done === 1;
  }

  private calculateTotalSumOfItems(items: ApartmentItem[]){
    let sum = 0;
    for(let i = 0; i < items.length; i++){
      sum += items[i].Price;
    }
    return sum;
  }

  private updateApartmentItemBought(apartmentItem: ApartmentItem){
    apartmentItem.Done = 1;
    this.apartmentService.updateApartmentItemById(apartmentItem.Id, apartmentItem).subscribe(
      (item:ApartmentItem) => {
        const pos = this.apartmentItems.findIndex(
          (elem:ApartmentItem)  => {
            return elem.Id==apartmentItem.Id;
          }
        );
        this.apartmentItems.splice(pos,1);
        this.apartmentItemsBought.push(item);
      }
    );
  }

}
