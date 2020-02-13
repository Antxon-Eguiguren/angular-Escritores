import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscritoresComponent } from './escritores/escritores.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'escritores' },
  { path: 'escritores', component: EscritoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
