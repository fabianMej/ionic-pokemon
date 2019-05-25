import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPokemons(): Observable<any> {
    return this.httpClient.get<any>('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
  }
}
