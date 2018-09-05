import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
@Input() Title: string;
@Output() onClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public buttonWasClicked(){
    this.onClick.emit("se presiono el boton");
  }
}
