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

  constructor() {
  }

  ngOnInit(): void {
  }

  flipCard(card: Card): void {
    console.log('FLIP')
    console.log(card);
    console.log(this.lastOpened)
    console.log(this.cards)

    if (this.lastOpened === -1 ) {
      this.cards.find((el) => {
        return el.id === card.id
      })!.isOpened = true;
      // this.cards[card.id!].isOpened = true;
      this.lastOpened = card.id;
      return
    }

    if (this.lastOpened !== card.id) {
      this.cards.find((el) => {
        return el.id === this.lastOpened!
      })!.isOpened = false;
      // this.cards[this.lastOpened!].isOpened = false;
      this.lastOpened = card.id;
      this.cards.find((el) => {
        return el.id === card.id
      })!.isOpened = true;
      // this.cards[card.id!].isOpened = true;
      return
    }

    if (this.lastOpened === card.id) {
      this.cards.find((el) => {
        return el.id === card.id
      })!.isOpened = false;
      // this.cards[card.id!].isOpened = false;
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
