import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ItemSummary} from '../../model/ItemSummary';

@Component({
  selector: 'app-single-item',
  imports: [],
  templateUrl: './single-item.component.html',
  standalone: true,
  styleUrl: './single-item.component.css'
})
export class SingleItemComponent
{
  @Input() item! : ItemSummary;
  @Output() topOrBottom = new EventEmitter<number>();
  //
  // @Output() topItem = new EventEmitter<number>();
  // @Output() bottomItem = new EventEmitter<number>();

  eventEmit() {
    this.topOrBottom.emit(this.item.id);
  }

  // eventEmitTopItem(){
  //   this.topItem.emit(this.item.id);
  // }
  //
  // eventEmitBottomItem(){
  //   this.bottomItem.emit(this.item.id);
  // }
  //

}
