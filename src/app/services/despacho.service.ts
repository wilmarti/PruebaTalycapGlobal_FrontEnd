import { Injectable } from '@angular/core';
import { FormularioDespachos } from '../models/FormularioDespachos';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DespachoService {

  myAppUrl = 'https://localhost:44337';
  myApiUrl= '/api/Despacho';
  list!: FormularioDespachos[];

  private ActualizarFormulario = new BehaviorSubject<FormularioDespachos>({}as any); 

  constructor(private http: HttpClient) { }

  GuardarDespacho(cliente:FormularioDespachos):Observable<FormularioDespachos> {
    return this.http.post<FormularioDespachos>(this.myAppUrl + this.myApiUrl,cliente)
  }

  EliminarDespacho(Id : number ):Observable<FormularioDespachos>{
    return this.http.delete<FormularioDespachos>(this.myAppUrl + this.myApiUrl +"/"+ Id);
  }
 

  ObtenerDespacho(){
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
        .then(data => {          
          this.list = data as FormularioDespachos[];
        });

       
  }

  actualizardespacho(id:number,cliente:FormularioDespachos):Observable<FormularioDespachos>{
    return this.http.put<FormularioDespachos>(this.myAppUrl + this.myApiUrl +"/"+ id,cliente);
  }


  actualizar(despacho: FormularioDespachos){
    this.ActualizarFormulario.next(despacho) 
  }

   ObtenerDespacho$():Observable<FormularioDespachos>{
    return this.ActualizarFormulario.asObservable();
  } 


}
