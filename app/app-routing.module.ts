import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { observable } from 'rxjs';
import { FormularioComponent } from './formulario/formulario.component';

import { ListaComponent } from './lista/lista.component';


const routes: Routes = [
  { path: 'formulario', component: FormularioComponent},
  { path: 'formulario/create', component: FormularioComponent},
  {path: 'listar', component: ListaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

