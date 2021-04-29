import { Injectable } from '@angular/core';
import { Empleado } from './models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  /*C1  */
  arrEmpleados:Empleado[];
  
  constructor() { 
    // C1 inicializando en el constructor
    this.arrEmpleados=[];
  }

  // D1 creamos un metodo  que nos devuelva una promesa 
  // eutilizaremos este metodo para la lista de empleados para traernos todos los datos
  // y poder listarlos INYECTAMOS EN EL CONSTRUCTOR del ts...nos vamos al ts de 
  // empleados => lista-emp.ts D2
  getAll():Promise<Empleado[]>{
     return new Promise((resolve,reject)=>{
       resolve(this.arrEmpleados);
     }); 
  }






  /*C2 no usaremos promesa pero si a la hora de recuperar 
  vamos a recibir un empleado por parametro...luego paa hacer una incersion tenemos que 
  tener este servicop dentro de nuestro formulario
  PASO 1 si necesito dentro de un ts utilizar un servicio en concreto lo primero que
  hago es inyectar en el constructor => formulario.ts C3*/
  insert(pEmpleado):void{
    this.arrEmpleados.push(pEmpleado);
    console.log(this.arrEmpleados);
  }
}
