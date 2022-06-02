import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiltroPipe } from '../pipes/filtro.pipe';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { GeneracionesComponent } from './pages/generaciones/generaciones.component';


@NgModule({
  declarations: [
    HomeComponent,
    GeneracionesComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    FormsModule
  ]
})
export class PokedexModule { }
