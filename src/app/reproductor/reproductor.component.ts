import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Cancion } from '../cancion';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  @Input() cancion: Cancion;
  //@ViewChild('player') audioPlayerRef: ElementRef;



  constructor() {
  }

  ngOnInit(): void {
  }

  tiempototal(): number {
    const audio = document.getElementById('player');
    let tiempo_total: number;
    //tiempo_total = audio.getElementsByClassName('player').length;
    return tiempo_total;
  }


}
