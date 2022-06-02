import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneracionesComponent } from './pages/generaciones/generaciones.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'home', component:HomeComponent },
      { path:'generaciones', component:GeneracionesComponent },
      { path:'**', redirectTo:'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
