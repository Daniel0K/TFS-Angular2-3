import { Card } from '../models/card'
import { Inject, Injectable } from '@angular/core';
import {
  ICardsApiService,
  ICardsApiServiceToken,
} from '../interfaces/ICardsApiService';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private _cards: Card[] = [];

  constructor(
    @Inject(ICardsApiServiceToken)
    private cardsApiService: ICardsApiService,
  ) {}

  get cards(): Card[] {
    return this._cards;
  }

  initialize() {
    this.cardsApiService.getAll().subscribe((cards) => {
      this._cards = cards;
    });
  }

  addCard(card: Card): void {
    this.cardsApiService.add(card).subscribe(() => {
      this.initialize();
    });
  }

  delCard(card: Card): void {
    this.cardsApiService.delete(card.id!).subscribe(() => {
      this.initialize();
    });
  }
}
