import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { PokeApiService } from '../Services/poke-api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon:any;
  name:string='';
  id:number=0;
  indexPokemon:number=0;
  nombrePokemon:string='';

  constructor(private pokeService:PokeApiService, private router:Router, private activatedRoute:ActivatedRoute ) { }

  
  

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.name = params['name'],
          this.id = params['id']
        }
      );
    this.pokeService.conexionHttpName(this.name)
      .subscribe(pokemon => this.pokemon = pokemon)
    console.log("Hola" , this.activatedRoute.params)
  }
  
  regresar(){
    this.router.navigate(['/home/home'])
  }
}
