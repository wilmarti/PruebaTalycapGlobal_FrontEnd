import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
  styleUrls: ['./formulario-clientes.component.css']
})

export class FormularioClientesComponent implements OnInit {
  form?: FormGroup;

  constructor(){}

  ngOnInit(): void {
    
  }


}
