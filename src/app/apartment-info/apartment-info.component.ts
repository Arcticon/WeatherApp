import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from "@angular/http";
import { ApartmentService } from "../shared/apartment/apartment.service";
import { ApartmentItem } from '../shared/apartment/apartmentitem';

@Component({
  selector: 'app-apartment-info',
  templateUrl: './apartment-info.component.html',
  styleUrls: ['./apartment-info.component.scss']
})
export class ApartmentInfoComponent implements OnInit, OnDestroy {

  constructor(private apartmentService: ApartmentService) { }

  private apartmentItems:ApartmentItem[] = [];
  private apartmentItemsBought:ApartmentItem[] = [];
  private newApartmentItem:ApartmentItem;
  private sumItems = 0;
  private sumItemsBought = 0;
  private isAddVisible:boolean = false;

  private apartmentSubscription = [];

  ngOnInit() {
    this.apartmentSubscription.push(this.apartmentService.getApartmentItems().subscribe(
      (apartmentItems:ApartmentItem[]) => {
        this.apartmentItems = apartmentItems.filter(this.isOfTypeNotDone);
        this.apartmentItemsBought = apartmentItems.filter(this.isOfTypeDone);
        this.sumItems = this.calculateTotalSumOfItems(this.apartmentItems);
        this.sumItemsBought = this.calculateTotalSumOfItems(this.apartmentItemsBought);
      },
      (error:Response) => console.error(error)
    ));
  }

  ngOnDestroy(){
    for(let i = 0; i < this.apartmentSubscription.length; i++){
      this.apartmentSubscription[i].unsubscribe();
    }
  }

  private addClicked(){
    this.newApartmentItem = new ApartmentItem;
    this.newApartmentItem.Done = 0;
    this.isAddVisible = true;
  }

  private resetClicked(){
    this.isAddVisible = false;
  }

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

  private setApartmentItemBought(apartmentItem:ApartmentItem){
    apartmentItem.Done = 1;
    this.apartmentSubscription.push(this.apartmentService.updateApartmentItemById(apartmentItem.Id, apartmentItem).subscribe(
      (item:ApartmentItem) => {
        const pos = this.apartmentItems.findIndex(
          (elem:ApartmentItem)  => {
            return elem.Id==apartmentItem.Id;
          }
        );
        this.sumItems -= apartmentItem.Price;
        this.apartmentItems.splice(pos,1);
        this.sumItemsBought += apartmentItem.Price;
        this.apartmentItemsBought.push(apartmentItem);
      }
    ));
  }

  private removeApartmentItemBought(apartmentItem:ApartmentItem){
    apartmentItem.Done = 0;
    this.apartmentSubscription.push(this.apartmentService.updateApartmentItemById(apartmentItem.Id, apartmentItem).subscribe(
      (item:ApartmentItem) => {
        const pos = this.apartmentItemsBought.findIndex(
          (elem:ApartmentItem)  => {
            return elem.Id==apartmentItem.Id;
          }
        );
        this.sumItemsBought -= apartmentItem.Price;
        this.apartmentItemsBought.splice(pos,1);
        this.sumItems += apartmentItem.Price;
        this.apartmentItems.push(apartmentItem);
      }
    ));
  }

  private deleteApartmentItem(apartmentItem:ApartmentItem){
    this.apartmentSubscription.push(this.apartmentService.deleteApartmentItem(apartmentItem.Id).subscribe(
      () => {
        const pos = this.apartmentItems.findIndex(
          (elem:ApartmentItem)  => {
            return elem.Id==apartmentItem.Id;
          }
        );
        this.sumItems -= apartmentItem.Price;
        this.apartmentItems.splice(pos,1);
      }
    ));
  }

  private createNewApartmentItem(){
    if(this.newApartmentItem.Name !== null && this.newApartmentItem.Price != null){
      this.apartmentSubscription.push(this.apartmentService.addApartmentItem(this.newApartmentItem).subscribe(
        (item:ApartmentItem) => {
          this.apartmentItems.push(item);
          this.sumItems += item.Price;
          this.isAddVisible = false;
        },
        (error:Response) => console.error(error)
      ));
    }

  }

}
