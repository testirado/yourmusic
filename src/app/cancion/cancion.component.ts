import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {

  titulo = 'TNT';
  autor = 'AC/DC';
  ano = '1975';
  disco = 'TNT';
  estilo = 'Hard Rock';

  constructor() { }

  ngOnInit(): void {
  }

}
