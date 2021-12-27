import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroeResponse } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<HeroeResponse[]> {
    return this.http.get<HeroeResponse[]>('http://localhost:3000/heroes');
  }

  getHeroesById(id: string): Observable<HeroeResponse> {
    return this.http.get<HeroeResponse>(`http://localhost:3000/heroes/${id}`);
  }
}
