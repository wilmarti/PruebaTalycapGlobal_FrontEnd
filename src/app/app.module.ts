import { RouterModule,Routes } from '@angular/router';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormularioClientesComponent } from './Components/clientes/formulario-clientes/formulario-clientes.component';
import { ListaClientesComponent } from './Components/clientes/lista-clientes/lista-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DespachosComponent } from './Components/despachos/despachos.component';
import { FormularioDespachosComponent } from './Components/despachos/formulario-despachos/formulario-despachos.component';
import { ListaDespachosComponent } from './Components/despachos/lista-despachos/lista-despachos.component';
import { EncabezadoComponent } from './Components/encabezado/encabezado.component';

/* const routes: Routes = [
  { path: 'clientes',component:FormularioClientesComponent},
  { path: 'despachos',component:ListaDespachosComponent},
  //{ path: '**',component:page4},
 ]; */


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FooterComponent,
    FormularioClientesComponent,
    ListaClientesComponent,
    DespachosComponent,
    FormularioDespachosComponent,
    ListaDespachosComponent,
    EncabezadoComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    //RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
