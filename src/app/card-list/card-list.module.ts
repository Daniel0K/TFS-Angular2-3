import { NgModule } from '@angular/core';
import {CardAddFormModule} from "./card-add-form/card-add-form.module";
import {CardItemModule} from "./card-item/card-item.module";
import {CommonModule} from "@angular/common";
import {CardListComponent} from "./card-list.component";



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
    CommonModule
  ]
})
export class CardListModule { }
