import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';


@Component({
  selector: 'app-PagListaVehiculo',
  templateUrl: './PagListaVehiculo.component.html',
  styleUrls: ['./PagListaVehiculo.component.css']
})
export class PagListaVehiculoComponent implements OnInit {
  mostrarImagen = true
private _filtro:string = '';

get filtro (){
  return this._filtro
}

set filtro (data:string){
  this._filtro = data;
  this.consultaVehiculos();
}

  @Input() valor: string = ''
  listaVehiculos: Array<any> = [];

  
  constructor(
    private vehiculoService: VehiculoService,
  ) {

  }
  
  mostrar() {
    this.mostrarImagen = !this.mostrarImagen
  }

  ngOnInit() {
    this.consultaVehiculos();
    
  }
 
  consultaVehiculos(){
    this.vehiculoService.getVehiculos(this.filtro).subscribe( data => {
      this.listaVehiculos = data;
    });
  }
  recepcion(dato: number) {
    console.log('Dato: ', dato);
  }

}