import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  canciones: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.canciones = firestore.collection('canciones').valueChanges();
  }
  title = 'YourMusic';
}
