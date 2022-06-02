import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../Interfaces/interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(pokemons: Result[], page: number = 0): Result[] {
    return pokemons.slice(page,page+6);
  }

}
