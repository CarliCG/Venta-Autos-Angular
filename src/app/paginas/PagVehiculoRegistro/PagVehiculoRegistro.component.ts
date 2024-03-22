import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/Modelos/Vehiculo';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      'codigo': [],
      'marca': [],
      'modelo': [],
      'ano': [],
      'color': [],
      'kilometraje': [],
      'precio': [],
      'calificacion': []
    });
  }

  ngOnInit() {
  }

  guardar() {
    
     let vehiculo:Vehiculo = {...this.formulario.value};
    this.vehiculoServicio.addvehiculo(vehiculo);
    console.log('Grabado con éxito');
    console.log('Formulario',this.formulario.value);
  }
}
