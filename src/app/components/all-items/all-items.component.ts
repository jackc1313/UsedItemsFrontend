import { Component } from '@angular/core';
import {ItemSummary} from '../../model/ItemSummary';
import {RequestClientService} from '../../services/request-client.service';
import {SingleItemComponent} from '../single-item/single-item.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-all-items',
  imports: [
    SingleItemComponent,
    NgForOf
  ],
  templateUrl: './all-items.component.html',
  standalone: true,
  styleUrl: './all-items.component.css'
})
export class AllItemsComponent
{
  items: ItemSummary[] = [];

  constructor(private serv: RequestClientService)
  {
    serv.getAllItems().subscribe(
      (resp)=>{
        this.items = resp;
      }
    );
  }

  moveItem(id:number) {
    let elementPosition = this.items.findIndex(element => element.id === id); //saving the position of the element with the given id

    if (elementPosition != 0) {
      let elementToMove = this.items[elementPosition]; //saving the element at the given position
      this.items.splice(elementPosition, 1); //removing the element from the array at the starting position
      this.items.unshift(elementToMove); //putting the element in the first position of the array
    }
    if (elementPosition == 0) {
      let elementToMove = this.items[elementPosition];
      this.items.splice(elementPosition, 1);
      this.items.push(elementToMove); //putting it at the bottom if starting position is the top of the list
    }
  }

    // mettiInEvidenza(id:number)
    // {
    //   let posizioneElemento = this.items.findIndex(f => f.id === id); //è la POSIZIONE dell'elemento
    //   let elementoDaSpostare = this.items[posizioneElemento]; //salvo l'elemento di prima
    //   this.items.splice(posizioneElemento, 1); //rimuovo il primo elemento dall'array
    //   this.items.unshift(elementoDaSpostare); //metto in prima posizione la copia dell'elemento
    // }
    //
    // mettiInFondo(id:number)
    // {
    //   let posizioneElemento = this.items.findIndex(f => f.id === id);
    //   if(posizioneElemento == 0)
    //   {
    //     let elementoDaSpostare = this.items[posizioneElemento];
    //     this.items.splice(posizioneElemento, 1);
    //     this.items.push(elementoDaSpostare);
    //   }
    // }


}
