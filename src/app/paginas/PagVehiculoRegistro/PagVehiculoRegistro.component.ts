import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/Modelos/Vehiculo';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import Swal from 'sweetalert2';
import {validadorCodigo} from '../../validaciones/VehiculoValidaciones'
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {

  formulario: FormGroup;
  constructor(
    private vehiculoServicio: VehiculoService,
    private formBuilder: FormBuilder,
    // private activatedRoute: ActivatedRoute
  ) {
    this.formulario = this.formBuilder.group({
      'codigo': ['', [Validators.required, validadorCodigo()]],
      'marca': ['', [Validators.required]],
      'modelo': [],
      'ano': [],
      'kilometraje': [],
      'precio': [],
      'calificacion': []
    });
  }

  ngOnInit() {
// this.activatedRoute.params.subscribe(param=>{
//   let codigo=param['codigo'];
//   this.vehiculoServicio.getVehiculo
// })
  }

  guardar() {
    if (this.formulario.valid) {
      this.vehiculoServicio.insertVehiculo({ ...this.formulario.value }).subscribe(
        respuesta => {
          if (respuesta.codigo == '') {

            Swal.fire({
              title: "Mensaje Completo",
              text: "Vehiculo registrado con exito",
              icon: "success"

            }).then(res =>{
              this.formulario.reset();
            });
    } else {
      Swal.fire({
        title: "Mensaje",
        text: "No se pudo registrar el vehiculo:" + respuesta.mensaje,
        icon: "error"
      });
    }
  }
      );
}else {
  Swal.fire({
    title: "Mensaje Incompleto",
    text: "Existen campos sin llenar",
    icon: "error"
  });
}

    
  }
}

export function validadorCodigoComparativo() {
  return (formulario: FormGroup): ValidationErrors | null => {
    let valor = formulario.controls['codigo'].value;
    let valor2 = formulario.controls['codigo_confirm'].value;
    if (valor === valor2) {
      return null;
    }
    return { 'codigo_comparativo': true };
  }
}