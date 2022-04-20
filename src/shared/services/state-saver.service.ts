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
    console.log('return',this.states)
    this.states = new Map(JSON.parse(localStorage.getItem('cache')!));
    console.log(this.states)
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
    console.log('Delete CaRD State')
    localStorage.setItem('cache', JSON.stringify(Array.from(this.states.entries())));
  }

  clearState(): void {
    localStorage.clear();
  }

  fixSetOfCards(i: number) {
    let fixedArr = new Map(JSON.parse(localStorage.getItem('cache')!));

    console.log(fixedArr)
    for (const key of fixedArr.keys()) {
      if (parseInt(<string>key) > i) {
        let value = fixedArr.get(key);
        fixedArr.delete(key);
        fixedArr.set((parseInt(<string>key) - 2), value)
      }
    }
    console.log(fixedArr)
    localStorage.setItem('cache', JSON.stringify(Array.from(fixedArr.entries())));
  }
}
