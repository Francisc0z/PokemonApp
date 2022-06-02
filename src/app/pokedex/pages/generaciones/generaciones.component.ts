import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/Interfaces/interfaces';
import { PokeApiService } from 'src/app/Services/poke-api.service';

@Component({
  selector: 'app-generaciones',
  templateUrl: './generaciones.component.html',
  styleUrls: ['./generaciones.component.css']
})
export class GeneracionesComponent implements OnInit {
  pokemon:Result[]=[];
  public page:number=0;
  constructor(private pokeService:PokeApiService) { }

  ngOnInit(): void {
    this.pokeService.conexionHttpItem()
      .subscribe(resp=>{
        this.pokemon=resp.results;
      });
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
