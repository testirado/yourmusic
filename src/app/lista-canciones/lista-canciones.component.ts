import { Component, OnInit} from '@angular/core';
import { Cancion } from '../cancion';

import { Observable } from 'rxjs';

import { CancionesService } from '../services/canciones.service';

@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.css']
})

export class ListaCancionesComponent implements OnInit {

  canciones: Cancion[];
  cancionSeleccionada: Cancion;
  filtroGrupo = '';

  constructor(private cancionService: CancionesService) {

    // this.cancionService.getCanciones()
    //        .subscribe();


   }

   getCanciones(): void{

    this.cancionService.getCanciones().subscribe(canciones => this.canciones = canciones);

   }

  ngOnInit(): void {

    this.getCanciones();

    console.log('-----Componente Canciones[ngOnInit]----');
  }

  onSelectCancion(cancion: Cancion): void{
    this.cancionSeleccionada = cancion;
  }

}
