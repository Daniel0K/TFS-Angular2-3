import {Component, OnInit} from '@angular/core';
import {Card} from "../../shared/models/card";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})
export class CardListComponent implements OnInit {
  cards: Card[] = [
    {
      id: 0,
      title: 'Hi',
      text: 'Привет',
      isOpened: false
    },
    {
      id: 1,
      title: 'Yes',
      text: 'Да',
      isOpened: false
    },
    {
      id: 2,
      title: 'No',
      text: 'Нет',
      isOpened: false
    },
    {
      id: 3,
      title: 'Beverage',
      text: 'Напиток',
      isOpened: false
    },
    {
      id: 4,
      title: 'Food',
      text: 'Еда',
      isOpened: false
    },
    {
      id: 5,
      title: 'Snack',
      text: 'Закуска',
      isOpened: false
    },

  ]

  lastOpened: number | undefined = -1;

  isAnimationRunning: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  flipCard(card: Card, i: number): void {
    if (this.lastOpened === -1 ) {
      this.cards[i].isOpened = true;
      this.lastOpened = i;
      return
    }

    if (this.lastOpened !== i) {
      this.cards[this.lastOpened!].isOpened = false;
      this.lastOpened = i;
      this.cards[i].isOpened = true;
      return
    }

    if (this.lastOpened === i) {
      this.cards[i].isOpened = false;
      this.lastOpened = -1;
      return
    }

  }

  addCard(card : Card) {
    card.id = this.cards[this.cards.length -1 ].id! + 1;
    this.cards.push(card);
  }

  deleteCard(card : Card) {

    let i = this.cards.findIndex((el) => {
      return el.id === card.id
    })

    this.cards.splice(i,1);
    if (this.lastOpened === card.id) {
      this.lastOpened = -1 ;
    }
  }

}
