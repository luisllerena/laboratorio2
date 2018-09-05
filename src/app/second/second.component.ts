import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../model';
import { PERSONAS } from '../data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  person: Person;
  personas: Person[];
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private router: Router, private activated: ActivatedRoute) { }
  
  ngOnInit() {
    this.activated.params.subscribe((info) => {
      console.log(info.id);
      this.personas = PERSONAS;
      console.log(this.personas[info.id]);
      this.person = this.personas[info.id];
    });
  }
  
  public navigate(param) {
    this.router.navigate([param]);
  }
}
