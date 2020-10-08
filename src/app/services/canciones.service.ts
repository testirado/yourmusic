import { Injectable } from '@angular/core';

import { Cancion } from '../cancion';
import { CANCIONES } from '../lista_canciones';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CancionesService {

  private itemsCollection: AngularFirestoreCollection<any>;

  public canciones: any[] = [];

  constructor(private afs: AngularFirestore) { }


  getCanciones(): Observable<Cancion[]>{
     return this.afs.collection<Cancion>('canciones').valueChanges();
     // return of(CANCIONES);
  }

  insertarCancion(cancion: Cancion){
    this.itemsCollection.add({
      ano: cancion.ano,
      autor: cancion.autor,
      disco: cancion.disco,
      estilo: cancion.estilo,
      imagen: cancion.imagen,
      titulo: cancion.titulo,
      url: cancion.url
    });
  }

  actualizarCancion(cancion: Cancion){
    return this.itemsCollection.doc(cancion.autor).update(cancion);
  }

}
