import { Component, OnInit } from '@angular/core';
import { CANCIONES } from '../lista_canciones';


@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.css']
})
export class ListaCancionesComponent implements OnInit {

  canciones = CANCIONES;

  constructor() { }

  ngOnInit(): void {
  }

}
