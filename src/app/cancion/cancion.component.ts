import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})

export class CancionComponent implements OnInit {

  cancion: Cancion = {
    titulo: 'TNT',
    autor: 'AC/DC',
    ano: 1975,
    disco: 'TNT',
    estilo: 'Hard Rock'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
