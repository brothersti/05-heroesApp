import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeResponse } from '../../interfaces/interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
    img{
      width:100%;
      border-radius: 5px;
    }
    `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: HeroeResponse;

  constructor(private activatedRoute: ActivatedRoute,
              private heroeService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroeService.getHeroesById(id))
      )
      .subscribe(resp => this.heroe = resp)
  };

  regresar(){
    this.router.navigate(['/heroes']);
  }
}

