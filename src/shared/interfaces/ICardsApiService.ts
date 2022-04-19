import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { InjectionToken } from '@angular/core';

export const ICardsApiServiceToken = new InjectionToken(
  'ICardsApiService'
);

export interface ICardsApiService {
  getAll(): Observable<Card[]>;

  add(purchase: Card): Observable<void>;

  delete(id: string): Observable<void>;
}
