import { Component, OnInit} from '@angular/core';
import { CANCIONES } from '../lista_canciones';
import { Cancion } from '../cancion';


@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.css']
})

export class ListaCancionesComponent implements OnInit {

  canciones = CANCIONES;
  cancionSeleccionada: Cancion;
  filtroGrupo = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSelectCancion(cancion: Cancion): void{
    console.log('Entro dentro de la cancion' + cancion.titulo);
    this.cancionSeleccionada = cancion;
  }

}
