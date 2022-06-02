import { Component, OnInit } from '@angular/core';
import { RESTPokemon, Result } from 'src/app/Interfaces/interfaces';
import { PokeApiService } from 'src/app/Services/poke-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemon:Result[]=[];
  pokemon2:Result[]=[];
  pokemonHabilidades:Result[]=[];
  termino:string='';
  pokeUrl:string[]=[];

  public page:number=0;

  constructor(private pokeService:PokeApiService) { }

  

  ngOnInit(): void {
    this.pokeService.conexionHttp()
      .subscribe(resp=>{
        this.pokemon=resp;
        this.pokemon2=resp;
      });

    this.pokeService.conexionHttpHabilidades()
    .subscribe(resp=>{
      this.pokemonHabilidades=resp.results;
    });
  }

  busqueda(){
      this.pokemon2 = this.pokemon.filter( (pokemones) => 
        pokemones.name
          .includes(this.termino.toLowerCase())
        )
  }
  nextPage(){
    if(this.page<1500){
      this.page += 6;
    }
  }
  prevPage(){
    if(this.page>0){
      this.page -= 6;
    }
  }
}
