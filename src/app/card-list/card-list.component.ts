import {Component, OnInit} from '@angular/core';
import {Card} from "../../shared/models/card";
import {CardsService} from "../../shared/services/cards.service";
import {StateSaver} from "../../shared/services/state-saver.service";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})
export class CardListComponent implements OnInit {

  isAnimationRunning: boolean = false;

  constructor(public cardsService: CardsService,
              public stateSaver: StateSaver) {
  }

  ngOnInit(): void {
    this.cardsService.init();
  }

  addCard(card: Card): void {
    this.cardsService.addCard(card);
  }

  delCard(card: Card,i:number): void {
    console.log(card,i);
    // this.stateSaver.deleteCard(card.isOpened,i);
    this.stateSaver.fixSetOfCards(i)
    this.cardsService.delCard(card);

  }

  flipCard(card: Card, i: number): void {
    card.isOpened = !card.isOpened;

    if (card.isOpened) {
      this.stateSaver.saveCard(card.isOpened,i);
    }

    if (!card.isOpened) {
      this.stateSaver.deleteCard(card.isOpened,i)
    }

  }

  turnAllCards(): void {
    this.cardsService.cards.forEach((el) => {
      el.isOpened = false;
    })
    this.stateSaver.clearState();
  }

}
