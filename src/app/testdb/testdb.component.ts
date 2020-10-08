import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-testdb',
  templateUrl: './testdb.component.html',
  styleUrls: ['./testdb.component.css']
})
export class TestdbComponent implements OnInit {
  canciones: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.canciones = firestore.collection('canciones').valueChanges();
  }

  ngOnInit(): void {
  }

}
