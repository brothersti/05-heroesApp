import { Component, OnInit } from '@angular/core';
import { HeroeResponse } from '../../interfaces/interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {
  heroes: HeroeResponse[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(resp => {
      this.heroes = resp;
    })
  }

}
