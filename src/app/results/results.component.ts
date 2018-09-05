import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
// @Input() Title: string;
 // tslint:disable-next-line:no-output-on-prefix
 @Output() onClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public buttonWasClicked(e) {
    this.onClick.emit('se presiono el boton');
    console.log(e);
  }
}
