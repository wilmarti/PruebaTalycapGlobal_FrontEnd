import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormularioClientes } from '../models/FormularioClientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  myAppUrl = 'https://localhost:44337';
  myApiUrl= '/api/Cliente';
  list!: FormularioClientes[];

   private ActualizarFormulario = new BehaviorSubject<FormularioClientes>({}as any); 
  

  constructor(private http: HttpClient) { }

  GuardarCliente(cliente:FormularioClientes):Observable<FormularioClientes> {
    return this.http.post<FormularioClientes>(this.myAppUrl + this.myApiUrl,cliente)
  }

  EliminarCliente(Id : number ):Observable<FormularioClientes>{
    return this.http.delete<FormularioClientes>(this.myAppUrl + this.myApiUrl +"/"+ Id);
  }
 

  ObtenerCliente(){
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
        .then(data => {
          this.list = data as FormularioClientes[];
        });
  }

  actualizarcliente(id:number,cliente:FormularioClientes):Observable<FormularioClientes>{
    return this.http.put<FormularioClientes>(this.myAppUrl + this.myApiUrl +"/"+ id,cliente);
  }


  actualizar(cliente: FormularioClientes){
    this.ActualizarFormulario.next(cliente) 
  }

   ObtenerCliente$():Observable<FormularioClientes>{
    return this.ActualizarFormulario.asObservable();
  } 


}
