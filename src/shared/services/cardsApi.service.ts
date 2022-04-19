import { ICardsApiService } from '../interfaces/ICardsApiService';
import { Card } from '../models/card';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const host = 'http://localhost:3000';

@Injectable()
export class CardsApiService implements ICardsApiService {
  constructor(private httpClient: HttpClient) {}

  add(card: Card): Observable<void> {
    return this.httpClient.post<void>(host, card);
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${host}/${id}`);
  }

  getAll(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(host);
  }
}
