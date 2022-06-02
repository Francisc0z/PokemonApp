import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RESTPokemon, Result } from '../Interfaces/interfaces';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  apiEndPoint:string="https://pokeapi.co/api/v2/";
  _pokemon:any;
  constructor(private http: HttpClient) {
   }
   conexionHttp():Observable<any>{
    return this.http.get<any>(`${this.apiEndPoint}pokemon/?limit=1500`)
      .pipe(
        map(this.transformSmallPokemon)
      )
   }
   conexionHttpHabilidades():Observable<any>{
    return this.http.get<any>(`${this.apiEndPoint}ability`)
   }
   conexionHttpName(name:string):Observable<any>{
    return this.http.get<any>(`${this.apiEndPoint}pokemon/${name}`)
   }
   conexionHttpItem():Observable<any>{
    return this.http.get<any>(`${this.apiEndPoint}item/?limit=1000`)
   }

   private transformSmallPokemon(resp: RESTPokemon){
      const pokemonList: any[] = resp.results.map( poke => {
        const urlArr = poke.url.split('/')
        const id = urlArr[6];
        return {
          id: '',
          name: poke.name,
          pic: id
        }
      } )
      return pokemonList
   }

  // conexionHttpSugerencias(termino:string):Observable<any[]>{
  //  return this.http.get<any[]>(`${this.apiEndPoint}/pokemon?q=${termino}&_limit=6`)
  //}
  
  
}
