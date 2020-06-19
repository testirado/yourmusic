import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancionComponent } from './cancion/cancion.component';
import { ListaCancionesComponent } from './lista-canciones/lista-canciones.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { ReproductorComponent } from './reproductor/reproductor.component';

@NgModule({
  declarations: [
    AppComponent,
    CancionComponent,
    ListaCancionesComponent,
    FiltroPipe,
    ReproductorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
