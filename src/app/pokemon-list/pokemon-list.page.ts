import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {
  pokemons: Array<any> = [];

  constructor(
    private pokemonService: PokemonService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(
      data => {
        this.pokemons = data.pokemon as any[];
      },
      error => {
        console.log(error);
      }
    );
  }

  showDetail(pokemon: any) {
    this.dataService.changeData(pokemon);
    this.router.navigate(['pokemon-detail']);
  }

}
