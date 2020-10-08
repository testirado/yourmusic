import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgProgressModule } from 'ngx-progressbar';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancionComponent } from './cancion/cancion.component';
import { ListaCancionesComponent } from './lista-canciones/lista-canciones.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestdbComponent } from './testdb/testdb.component';

// Services
import { CancionesService } from './services/canciones.service';

@NgModule({
  declarations: [
    AppComponent,
    CancionComponent,
    ListaCancionesComponent,
    FiltroPipe,
    ReproductorComponent,
    TestdbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgProgressModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [
    CancionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
