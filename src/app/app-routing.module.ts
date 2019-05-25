import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pokemon-list/pokemon-list.module#PokemonListPageModule' },
  { path: 'pokemon-list', loadChildren: './pokemon-list/pokemon-list.module#PokemonListPageModule' },
  { path: 'pokemon-detail', loadChildren: './pokemon-detail/pokemon-detail.module#PokemonDetailPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
