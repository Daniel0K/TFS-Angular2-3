import {Injectable} from '@angular/core';
import {Card} from "../models/card";

@Injectable({
  providedIn: 'root'
})
export class StateSaver {

  states!: Map<number, boolean>;

  constructor() {
    this.states = new Map<number, boolean>();
  }

  returnState(cards: Card[]): void {
    this.states = new Map(JSON.parse(localStorage.getItem('cache')!));
    if (this.states.size !== 0) {
      this.states.forEach((value, key) => {
        if (cards[key] !== undefined) {
          cards[key].isOpened = true;
        }
      })
    }
  }

  saveCard(state: boolean, i: number): void {
    this.states.set(i, state);
    localStorage.setItem('cache', JSON.stringify(Array.from(this.states.entries())));
  }

  deleteCard(state: boolean, i: number): void {
    this.states.delete(i);
    localStorage.setItem('cache', JSON.stringify(Array.from(this.states.entries())));
  }

  clearState(): void {
    localStorage.clear();
  }

  fixSetOfCards(i: number) {
    let fixedArr = new Map(JSON.parse(localStorage.getItem('cache')!));
    let ArrIterator = new Map(JSON.parse(localStorage.getItem('cache')!))
    for (const key of ArrIterator.keys()) {
      if (<number>key > i) {
        let value = fixedArr.get(key);
        fixedArr.delete(key);
        fixedArr.set((<number>key - 1), value)
      }
    }
    localStorage.setItem('cache', JSON.stringify(Array.from(fixedArr.entries())));
    this.states = new Map(JSON.parse(localStorage.getItem('cache')!));
  }
}
