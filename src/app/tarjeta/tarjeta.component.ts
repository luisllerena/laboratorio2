import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  texto: string;
}

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  persona: Persona = {
    nombre: 'Joiman Gomez',
    texto: 'Super Cool'
  };
  public likes = 0;
  public dislikes = 0;
  public totalVotes = 0 ;

  public onLike (): void {
    this.totalVotes += 1;
    this.likes += 1;
    if (this.dislikes > 0) { 
      this.dislikes -= 1; 
    }
  }
  
  public onDislike(): void {
    this.totalVotes += 1;
     this.dislikes += 1;
     if (this.likes > 0) { this.likes -= 1; }
     }
}
