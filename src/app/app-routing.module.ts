import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path:'home',
    loadChildren:()=>import('./pokedex/pokedex.module').then(m=>m.PokedexModule),
    canActivate:[ValidarTokenGuard],
    canLoad:[ValidarTokenGuard]
  },
  {
    path:'pokemon/:name',
    component:PokemonComponent
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
