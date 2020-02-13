import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscritoresComponent } from './escritores/escritores.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LibrosComponent } from './libros/libros.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'escritores' },
  { path: 'escritores', component: EscritoresComponent },
  {
    path: 'escritores/:id', component: DetalleComponent,
    children: [
      { path: 'libros', component: LibrosComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
