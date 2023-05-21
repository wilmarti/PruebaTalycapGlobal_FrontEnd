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


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FooterComponent,
    FormularioClientesComponent,
    ListaClientesComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
