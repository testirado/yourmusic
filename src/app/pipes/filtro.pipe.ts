import { Pipe, PipeTransform } from '@angular/core';
import { Cancion } from '../cancion';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultadoCanciones = [];
    for (const cancion of value){
      if (cancion.autor.indexOf(arg) > -1){
        resultadoCanciones.push(cancion);
      }
    }
    return resultadoCanciones;
  }

}
