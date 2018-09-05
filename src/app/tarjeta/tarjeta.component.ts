import { Component, OnInit } from '@angular/core';
import { Person } from '../model';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

  persona: Person =  {
    name: 'Luis Llerena',
    description: 'Ingeniero Desarrollador FullStack',
    subTitle: 'Desarrollador',
    thumbnail: '',
    imagenUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    title: '',
    likes: 0,
    dislikes: 0,
    totalVotes: 0
  };

  public likes = 0;
  public dislikes = 0;
  public totalVotes = 0 ;

  public onLike (): void {
    this.totalVotes += 1;
    this.likes += 1;
  }

  public onDislike(): void {
    this.totalVotes += 1;
    this.dislikes += 1;
  }
}
