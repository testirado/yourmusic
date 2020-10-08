import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestdbComponent } from './testdb/testdb.component';
import { ListaCancionesComponent } from './lista-canciones/lista-canciones.component';


const routes: Routes = [
  {path: 'testdb', component: TestdbComponent},
  {path: 'lista-canciones', component: ListaCancionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
