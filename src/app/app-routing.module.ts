import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioDespachos } from './models/FormularioDespachos';
import { FormularioClientes } from './models/FormularioClientes';
import { FormularioClientesComponent } from './Components/clientes/formulario-clientes/formulario-clientes.component';
import { FormularioDespachosComponent } from './Components/despachos/formulario-despachos/formulario-despachos.component';

const routes: Routes = [
 { path: 'clientes',component:FormularioClientesComponent},
 { path: 'despachos',component:FormularioDespachosComponent},
 //{ path: '**',component:page4},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
