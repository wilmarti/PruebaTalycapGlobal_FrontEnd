import { Component, OnDestroy, OnInit } from '@angular/core';
//import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { FormularioClientes } from 'src/app/models/FormularioClientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
  styleUrls: ['./formulario-clientes.component.css']
})

export class FormularioClientesComponent implements OnInit,OnDestroy {
  form?: FormGroup;  
  clienteForm!: FormGroup;
  suscription! :Subscription;
  cliente!:FormularioClientes;
  IdCliente = 0;

  //constructor(private formBuilder: FormBuilder) { }

  constructor(private formbuilder: FormBuilder, 
              private ClienteService:ClientesService,
              private toastr:ToastrService) {
    this.clienteForm = this.formbuilder.group ({
       IdCliente: 0,
       tipoIdentificacion: ['', Validators.required],
       identificacionCliente: ['', Validators.required],
       nombreCliente: ['', Validators.required],
       direccion: ['', Validators.required],
       telefono: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]]
    })
  }


  ngOnInit() {
    this.suscription = this.ClienteService.ObtenerCliente$().subscribe(data => {
      console.log(data);
      this.cliente = data;
      this.clienteForm.patchValue({
       tipoIdentificacion: this.cliente.tipoIdentificacion,
       identificacionCliente: this.cliente.identificacionCliente,
       nombreCliente: this.cliente.nombreCliente,
       direccion: this.cliente.direccion,
       telefono: this.cliente.telefono,
       email:this.cliente.email,
      });
      this.IdCliente = this.cliente.idCliente;
    }) 
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  guardarCliente() {

      if(this.IdCliente == 0){
        this.agregar();
      }else{
        this.editar();
      }
  }

  agregar(){
        // Realizar la lógica de guardar el cliente
        const clienteenviar:FormularioClientes ={
          idCliente: 0,
          tipoIdentificacion: this.clienteForm.get('tipoIdentificacion')?.value,
          identificacionCliente: this.clienteForm.get('identificacionCliente')?.value,
          nombreCliente: this.clienteForm.get('nombreCliente')?.value,
          direccion: this.clienteForm.get('direccion')?.value,
          telefono: this.clienteForm.get('telefono')?.value,
          email: this.clienteForm.get('email')?.value,
        }

       
      this.ClienteService.GuardarCliente(clienteenviar).subscribe(data =>{
        this.toastr.success('Registro Agregado','Cliente agregado con exito');
        this.ClienteService.ObtenerCliente();
        this.clienteForm.reset();
      });
  }

  editar(){
            // Realizar la lógica de guardar el cliente
            const clienteenviar:FormularioClientes ={
              idCliente: this.cliente.idCliente,
              tipoIdentificacion: this.clienteForm.get('tipoIdentificacion')?.value,
              identificacionCliente: this.clienteForm.get('identificacionCliente')?.value,
              nombreCliente: this.clienteForm.get('nombreCliente')?.value,
              direccion: this.clienteForm.get('direccion')?.value,
              telefono: this.clienteForm.get('telefono')?.value,
              email: this.clienteForm.get('email')?.value,
            }

            this.ClienteService.actualizarcliente(this.IdCliente,clienteenviar).subscribe(data =>{
              this.toastr.info('Registro Actualizado','Cliente actualizado con exito');
              this.ClienteService.ObtenerCliente();
              this.clienteForm.reset();
              this.IdCliente = 0;
            })

  }

}
