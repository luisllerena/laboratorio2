import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../model';
import { AppService } from '../app.service';
import { PERSONAS } from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  personas = PERSONAS;
  public likes = 0;
  public dislikes = 0;
  public totalVotes = 0;
  constructor(private router: Router) {}
  ngOnInit(): void {}

  public onLike (idx): void {
    this.personas[idx].totalVotes += 1;
    this.personas[idx].likes += 1;
    if (this.personas[idx].dislikes > 0) {
      this.personas[idx].dislikes -= 1;
    }
  }

  public onDislike(idx): void {
    this.personas[idx].totalVotes += 1;
    this.personas[idx].dislikes += 1;
    if (this.personas[idx].likes > 0) {
      this.personas[idx].likes -= 1;
    }
  }

  public goDetails(id: number) {
    this.router.navigate(['second/' + id]);
  }
}
