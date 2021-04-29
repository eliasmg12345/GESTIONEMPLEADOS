import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  /*A4  de tipo FormGroup que se tiene que importar
    */
  formNewEmpleado:FormGroup;

  // C3 inyectando luego en el submit C4
  constructor(
    private empleadosService:EmpleadosService,

  ) { 
    // A4 inicializando dentro del FormGroup voy a trabajar con cada uno del 
    // las propiedades que voy a utilizar => al html A5
    this.formNewEmpleado=new FormGroup({
      // B2 sin olvidar de importar la clase validator 
      // se tiene que bloquear el boton de submit en el html hasta que todos los
      // campos sean validos ademas de mostrar errores en los diferentes campos =>html B3
        nombre:new FormControl('',[
          Validators.required
        ]),
        apellidos:new FormControl('',[
          Validators.required
        ]),
        email:new FormControl('',[
          Validators.required
        ]),
        edad: new FormControl(''),
        departamento:new FormControl(''),
        password:new FormControl(''),
        imagen:new FormControl('')
      });
  }

  ngOnInit(): void {
  }

  
  onSubmit(){
    // C4 llamando al metodo del servicio .el insert y le paso los  datos del empleado
    // Ahora estructurando el hmtl => app.hmtl C5
    console.log(this.formNewEmpleado.value);
    this.empleadosService.insert(this.formNewEmpleado.value);
  }
}
