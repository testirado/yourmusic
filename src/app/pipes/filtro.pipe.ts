import { Pipe, PipeTransform } from '@angular/core';
import { Cancion } from '../cancion';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultadoCanciones = [];

    for (const cancion of value){
      if (cancion.autor.toLowerCase().indexOf(arg.toLowerCase()) > -1||
         cancion.titulo.toLowerCase().indexOf(arg.toLowerCase()) > -1)
          {
        resultadoCanciones.push(cancion);
      }
    }
    return resultadoCanciones;
  }

}

export class FilterPipe implements PipeTransform {
  transform(value: any, input: string) {
      if (input) {
          input = input.toLowerCase();
          return value.filter(function (el: any) {
              return el.toLowerCase().indexOf(input) > -1;
          })
      }
      return value;
  }
}
