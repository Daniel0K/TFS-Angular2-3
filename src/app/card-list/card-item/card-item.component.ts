import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from "../../../shared/models/card";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.less'],
  animations: [
    trigger('triggerCard',[
      state('true', style({
        transform: 'rotateY(180deg)'
      })),
      state('false', style({
        transform: 'rotateY(0deg)'
      })),
      transition('false <=> true', animate('0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'))
    ])
  ]
})
export class CardItemComponent  {
  @Input() card!:Card;
  @Output() delete =  new EventEmitter<Card>();
  @Output() flip = new EventEmitter<Card>();
  @Output() animationResult = new EventEmitter<boolean>();

  constructor() { }

  deleteCard() {
    this.delete.emit(this.card);
  }

  startAnimationResult(): void {
    this.animationResult.emit(true);
  }

  endAnimationResult(): void {
    this.animationResult.emit(false);
  }

}
