import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Card} from "../../../shared/models/card";

@Component({
  selector: 'app-card-add-form',
  templateUrl: './card-add-form.component.html',
  styleUrls: ['./card-add-form.component.less']
})
export class CardAddFormComponent implements OnInit {

  @Output()
  add = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    titleControl: new FormControl(null, [
      Validators.required,
    ]),
    textControl: new FormControl(null, [
      Validators.required,
    ])
  });

  submit() {
    this.add.emit({
      title:this.form.get('titleControl')?.value,
      text:this.form.get('textControl')?.value,
      isOpened: false
    });

    this.form.reset();

  }

}
