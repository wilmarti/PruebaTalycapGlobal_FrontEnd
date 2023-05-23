import { Component } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { FormularioClientes } from 'src/app/models/FormularioClientes';
import { FormularioDespachos } from 'src/app/models/FormularioDespachos';
import { ClientesService } from 'src/app/services/clientes.service';
import { DespachoService } from 'src/app/services/despacho.service';

@Component({
  selector: 'app-lista-despachos',
  templateUrl: './lista-despachos.component.html',
  styleUrls: ['./lista-despachos.component.css']
})
export class ListaDespachosComponent {

  constructor(public DespachoService:DespachoService,
    public toastr:ToastrService){}

    
  ngOnInit():void{

    this.DespachoService.ObtenerDespacho();
/*     this.ClientesService.ObtenerCliente$().subscribe(data =>{
      console.log(data);
    }); */
  }

  EliminarDespacho(Id : number){
    if (confirm('Esta seguro de eliminar el registro?')){
      this.DespachoService.EliminarDespacho(Id).subscribe(data =>{
        this.toastr.warning('Registro Eliminado','El despacho ha sido eliminado');
        this.DespachoService.ObtenerDespacho();
      })
    }
  }

  editar(despacholist: FormularioDespachos)  {
    this.DespachoService.actualizar(despacholist)
  } 

}




