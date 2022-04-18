import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {Card} from "../../../shared/models/card";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.less'],
  // animations: [
  //   trigger('toggle',[
  //     transition(':enter', animate('800ms cubic-bezier(0.175, 0.885, 0.32, 1.275)')),
  //     // transition(':leave', animate('', style({transform: 'rotateY(180deg)'}))),
  //   ])
  // ]
})
export class CardItemComponent implements OnInit {
  @Input() card!:Card;
  @Output() delete =  new EventEmitter<Card>();
  @Output() flip = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.card)
  }

  flipCard() {
    console.log(this.card)
    this.flip.emit(this.card);
  }

  deleteCard() {
    console.log('TEST')
    console.log('Emit')
    console.log(this.card)
    this.delete.emit(this.card);
  }

}
