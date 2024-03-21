import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/Modelos/Vehiculo';
import { VehiculoService } from '../../servicios/Vehiculo.service';

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {

  vehiculo: Vehiculo

  constructor( 
    private vehiculoServicio: VehiculoService
    )
    { 
    this.vehiculo = {
      codigo: '',
      marca: '',
      color: '',
      modelo: '',
      kilometraje:0,
      precio:0,
      foto:null,
      ano:0,
      calificacion:0
    }
  }

  ngOnInit() {
  }

  guardar(){
this.vehiculoServicio.addvehiculo(this.vehiculo);
console.log('Grabado con exito');
  }
}
