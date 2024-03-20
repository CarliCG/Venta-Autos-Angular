import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';


@Component({
  selector: 'app-PagListaVehiculo',
  templateUrl: './PagListaVehiculo.component.html',
  styleUrls: ['./PagListaVehiculo.component.css']
})
export class PagListaVehiculoComponent implements OnInit {
  mostrarImagen = true
  filtro:string = "";

  @Input() valor:string = ''
  listaVehiculos:Array<any> = [];

  constructor(
    private vehiculoService: VehiculoService
  ) { 
    
  }

  ngOnInit() {
    this.listaVehiculos=this.vehiculoService.getVehiculos();
  }
  mostrar() {
    this.mostrarImagen = !this.mostrarImagen
  }
recepcion (dato:number){
console.log('Dato: ',dato);
}
  
}
