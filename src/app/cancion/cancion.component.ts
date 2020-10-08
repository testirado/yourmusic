import { Component, OnInit, Input } from '@angular/core';
import { Cancion } from '../cancion';

import { CancionesService } from '../services/canciones.service';


@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})

export class CancionComponent implements OnInit {

  @Input() cancion: Cancion;

  constructor(private afs: CancionesService) {
    this.afs.getCanciones()
          .subscribe();
   }

  ngOnInit(): void {
  }

  modificarCancion(){
    this.afs.actualizarCancion(this.cancion);
  }

}
