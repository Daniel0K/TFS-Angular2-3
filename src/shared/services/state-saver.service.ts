import { Injectable } from '@angular/core';
import {Card} from "../models/card";

@Injectable({
  providedIn: 'root'
})
export class StateSaver {

  states!: Map<number, boolean>;

  constructor() {
    this.states = new Map<number, boolean>();
  }

  returnState (cards: Card[]) : void {

    console.log(JSON.parse(localStorage.getItem('cache')!));

    this.states = new Map(JSON.parse(localStorage.getItem('cache')!));

    console.log(this.states)
    if (this.states.size !== 0) {
      this.states.forEach((value, key) => {
        if (cards[key] !== undefined) {
          cards[key].isOpened = true;
        }
      })
    } else {

    }
  }

  saveCard(state: boolean, i: number) : void {
    console.log('saveCard')
    console.log(this.states)

    localStorage.setItem('cache', JSON.stringify(Array.from(this.states.entries())));
    this.states.set(i,state);

  }

  deleteCard(state: boolean, i: number) : void {
    console.log('deleteCard')
    this.states.delete(i);
    localStorage.setItem('cache', JSON.stringify(Array.from(this.states.entries())));
  }
}
