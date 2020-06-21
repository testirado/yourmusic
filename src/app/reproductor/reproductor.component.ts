import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Cancion } from '../cancion';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  @Input() cancion: Cancion;
  @ViewChild('player') audioPlayerRef: ElementRef;


  tiempo_total: number;

  constructor() { }

  ngOnInit(): void {
  }

  tiempototal(tiempo: number): number {
    return this.tiempo_total = tiempo;
  }

  onAudioPlay(){

  this.audioPlayerRef.nativeElement.play();
}

}
