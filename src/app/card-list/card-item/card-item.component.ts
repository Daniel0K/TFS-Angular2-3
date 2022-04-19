import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from "../../../shared/models/card";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.less'],
})
export class CardItemComponent implements OnInit {
  @Input() card!:Card;
  @Output() delete =  new EventEmitter<Card>();
  @Output() flip = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteCard() {
    this.delete.emit(this.card);
  }

}
