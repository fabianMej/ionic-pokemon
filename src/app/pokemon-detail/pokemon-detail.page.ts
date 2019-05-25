import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {
  pokemon: any = {};

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.currentData.subscribe(data => {
      this.pokemon = data;
    });
  }

}
