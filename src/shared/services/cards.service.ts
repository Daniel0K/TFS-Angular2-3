import { Card } from '../models/card'
import { Inject, Injectable } from '@angular/core';
import {
  ICardsApiService,
  ICardsApiServiceToken,
} from '../interfaces/ICardsApiService';
import {take} from "rxjs";
import {StateSaver} from "./state-saver.service";

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private _cards: Card[] = [];

  constructor(
    @Inject(ICardsApiServiceToken)
    public cardsApiService: ICardsApiService,
    public stateSaver: StateSaver
  ) {}

  get cards(): Card[] {
    return this._cards;
  }

  init() {
    this.cardsApiService.getAll().pipe(take(1)).subscribe((cards) => {
      this._cards = cards;
      this.stateSaver.returnState(this.cards);
    })
  }

  initialize() {
    this.cardsApiService.getAll().subscribe((cards) => {
      this._cards = cards;
    });
  }

  addCard(card: Card): void {
    this.cardsApiService.add(card).subscribe(() => {
      this.init();
    });
  }

  delCard(card: Card): void {
    this.cardsApiService.delete(card.id!).subscribe(() => {
      this.init();
    });
  }
}
