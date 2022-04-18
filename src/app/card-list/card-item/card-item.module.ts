import { NgModule } from '@angular/core';
import {CardItemComponent} from "./card-item.component";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    CardItemComponent
  ],
  exports: [
    CardItemComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CardItemModule { }
