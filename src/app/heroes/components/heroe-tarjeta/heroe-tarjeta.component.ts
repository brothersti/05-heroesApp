import { Component, Input } from '@angular/core';
import { HeroeResponse } from '../../interfaces/interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
    `
    mat-card{
      margin-top:20px;
    }
    `
  ]
})

export class HeroeTarjetaComponent  {
  @Input() heroe!: HeroeResponse;
}
