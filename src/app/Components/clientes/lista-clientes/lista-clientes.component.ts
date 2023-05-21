import { Component } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { FormularioClientes } from 'src/app/models/FormularioClientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent {

  constructor(public ClientesService:ClientesService,
              public toastr:ToastrService){}

  ngOnInit():void{

    this.ClientesService.ObtenerCliente();
/*     this.ClientesService.ObtenerCliente$().subscribe(data =>{
      console.log(data);
    }); */
  }

  EliminarCliente(Id : number){
    if (confirm('Esta seguro de eliminar el registro?')){
      this.ClientesService.EliminarCliente(Id).subscribe(data =>{
        this.toastr.warning('Registro Eliminado','El cliente ha sido eliminado');
        this.ClientesService.ObtenerCliente();
      })
    }
  }

  editar(clientelist: FormularioClientes)  {
    this.ClientesService.actualizar(clientelist)
  } 
}
