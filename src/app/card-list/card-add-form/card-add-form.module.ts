import { NgModule } from '@angular/core';
import {CardAddFormComponent} from "./card-add-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    CardAddFormComponent,
  ],
  exports: [
    CardAddFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class CardAddFormModule { }
