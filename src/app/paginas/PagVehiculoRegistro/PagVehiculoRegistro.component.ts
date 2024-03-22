import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/Modelos/Vehiculo';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private vehiculoServicio: VehiculoService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      'codigo': ['', [Validators.required, validadorCodigo()]],
      'codigo_confirm': [],
      'marca': ['', [Validators.required, validadorCodigo()]],
      'modelo': [],
      'ano': [],
      'color': [],
      'kilometraje': [],
      'precio': [],
      'calificacion': []
    },{
      validators:validadorCodigoComparativo()
    });
  }

  ngOnInit() {

  }

  guardar() {
    let vehiculo: Vehiculo = { ...this.formulario.value };
    this.vehiculoServicio.addvehiculo(vehiculo);

    /*Swal.fire({
      title: "Vehiculo Guardado",
      text: "Se ha guardado con éxito",
      icon: "info"
    });*/
  }
}

// Función donde se recibe un parámetro y retorna ValidationError o null
export function validadorCodigo(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log(control);
    const codigoV = /^[A]\d{3}$/;
    let value = control.value;
    if (codigoV.test(value)) {
      return null; // si es válido retorna null, si no, el esquema del error
    }
    return { 'codigoValidate': true };
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