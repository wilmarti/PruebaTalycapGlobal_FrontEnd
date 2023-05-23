import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DespachoService } from 'src/app/services/despacho.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { FormularioDespachos } from 'src/app/models/FormularioDespachos';

@Component({
  selector: 'app-formulario-despachos',
  templateUrl: './formulario-despachos.component.html',
  styleUrls: ['./formulario-despachos.component.css']
})


export class FormularioDespachosComponent {
  despachoForm!: FormGroup;
  suscription! :Subscription;
  despacho!:FormularioDespachos;
  IdDespacho = 0;


  constructor(private formbuilder: FormBuilder, 
    private DespachService:DespachoService,
    private toastr:ToastrService) {

          this.despachoForm = this.formbuilder.group ({
            idDespacho: 0,
            idCliente: ['', Validators.required],
            idProducto: ['', Validators.required],
            cantidad: ['', Validators.required],
            fechaRegistro: ['', Validators.required],
            fechaEntrega: ['', Validators.required],
            precio: ['', Validators.required],
            numeroTransporte: ['', Validators.required],
            numeroGuia: ['', Validators.required],
            idTipoEnvio: ['', Validators.required],
            idLugarEntrega: ['', Validators.required]

})
}

ngOnInit() {
  this.suscription = this.DespachService.ObtenerDespacho$().subscribe(data => {
    console.log(data);
    this.despacho = data;
    this.despachoForm.patchValue({
      idCliente: this.despacho.idCliente,
      idProducto: this.despacho.idProducto,
      cantidad: this.despacho.cantidad,
      fechaRegistro: this.despacho.fechaRegistro,
      fechaEntrega: this.despacho.fechaEntrega,
      precio:this.despacho.precio,
      numeroTransporte:this.despacho.numeroTransporte,
      numeroGuia:this.despacho.numeroGuia,
      idTipoEnvio:this.despacho.idTipoEnvio,
      idLugarEntrega:this.despacho.idLugarEntrega,
    });
    this.IdDespacho = this.despacho.idDespacho;
  }) 
}

ngOnDestroy(): void {
  this.suscription.unsubscribe();
}


guardarDespacho() { 

  console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    
  console.log("iddespacho:",this.IdDespacho);

    if(this.IdDespacho == 0){
      this.agregar();
    }else{
      this.editar();
    }
}

agregar(){
  // Realizar la lógica de guardar el cliente
  const despachoenviar:FormularioDespachos ={
    idDespacho: 0,
    idCliente: this.despachoForm.get('idCliente')?.value,
    idProducto: this.despachoForm.get('idProducto')?.value,
    cantidad: this.despachoForm.get('cantidad')?.value,
    fechaRegistro: this.despachoForm.get('fechaRegistro')?.value,
    fechaEntrega: this.despachoForm.get('fechaEntrega')?.value,
    precio: this.despachoForm.get('precio')?.value,
    numeroTransporte: this.despachoForm.get('numeroTransporte')?.value,
    numeroGuia: this.despachoForm.get('numeroGuia')?.value,
    idTipoEnvio: this.despachoForm.get('idTipoEnvio')?.value,
    idLugarEntrega: this.despachoForm.get('idLugarEntrega')?.value,
  }

this.DespachService.GuardarDespacho(despachoenviar).subscribe(data =>{
  this.toastr.success('Registro Agregado','Despacho agregado con exito');
  this.DespachService.ObtenerDespacho();
  this.despachoForm.reset();
});
}

editar(){
      // Realizar la lógica de guardar el cliente
      const despachoenviar:FormularioDespachos ={
        idDespacho: this.despacho.idDespacho,
        idCliente: this.despachoForm.get('idCliente')?.value,
        idProducto: this.despachoForm.get('idProducto')?.value,
        cantidad: this.despachoForm.get('cantidad')?.value,
        fechaRegistro: this.despachoForm.get('fechaRegistro')?.value,
        fechaEntrega: this.despachoForm.get('fechaEntrega')?.value,
        precio: this.despachoForm.get('precio')?.value,
        numeroTransporte: this.despachoForm.get('numeroTransporte')?.value,
        numeroGuia: this.despachoForm.get('numeroGuia')?.value,
        idTipoEnvio: this.despachoForm.get('idTipoEnvio')?.value,
        idLugarEntrega: this.despachoForm.get('idLugarEntrega')?.value,
      }

      this.DespachService.actualizardespacho(this.IdDespacho,despachoenviar).subscribe(data =>{
        this.toastr.info('Registro Actualizado','Cliente actualizado con exito');
        this.DespachService.ObtenerDespacho();
        this.despachoForm.reset();
        this.IdDespacho = 0;
      })

}

}
