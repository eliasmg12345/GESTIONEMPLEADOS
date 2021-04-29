import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../models/empleado.model';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  // D3 guardando enuna 
  empleados:Empleado[];

  // D2 inyectando
  constructor(
    private empleadosService:EmpleadosService
  ) { }


  // D3 recuperando los datos ..luego en => html D4
  ngOnInit(): void {
    this.empleadosService.getAll()
    .then(arrEmpleados=>{
      this.empleados=arrEmpleados;
    })
  }

}
