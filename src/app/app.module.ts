import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CardListModule} from "./card-list/card-list.module";
import {CardsService} from "../shared/services/cards.service";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
