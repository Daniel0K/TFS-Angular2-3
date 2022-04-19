import { NgModule } from '@angular/core';
import {CardAddFormModule} from "./card-add-form/card-add-form.module";
import {CardItemModule} from "./card-item/card-item.module";
import {CommonModule} from "@angular/common";
import {CardListComponent} from "./card-list.component";
import {CardsService} from "../../shared/services/cards.service";
import {ICardsApiServiceToken} from "../../shared/interfaces/ICardsApiService";
import {CardsApiService} from "../../shared/services/cardsApi.service";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    CardListComponent
  ],
  exports: [
    CardListComponent
  ],
  imports: [
    CardAddFormModule,
    CardItemModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {provide: ICardsApiServiceToken, useClass: CardsApiService}
  ]
})
export class CardListModule { }
