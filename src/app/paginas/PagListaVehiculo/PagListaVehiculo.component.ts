import { Component, OnInit } from '@angular/core';
import { VehiculoService, } from '../../servicios/Vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagListaVehiculo',
  templateUrl: './PagListaVehiculo.component.html',
  styleUrls: ['./PagListaVehiculo.component.css']
})
export class PagListaVehiculoComponent implements OnInit {
  constructor(private vehiculoService:VehiculoService){}
  public mostrarImagen = false;
  public listaVehiculos: Array<any> = [];
  private _filtro: string = '';

  get filtro(): string {
    return this._filtro;
  }

  set filtro(filtro: string) {
    this._filtro = filtro;
    
  }

  ngOnInit() {
    this.consultarVehiculo();

  }

consultarVehiculo(){
  this.vehiculoService.getVehiculos().subscribe(respuesta => {
    this.listaVehiculos = respuesta;
  });
}

  eliminar(codigo: string) {
    Swal.fire({
      title: "Seguro que deseas eliminar este registro?",
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText:'No',
      icon:'question'
    }).then((res)=>{
      if(res.isConfirmed){
        this.vehiculoService.eliminarVehiculo(codigo).subscribe(data=>{
          if(data.codigo=='1'){
            this.consultarVehiculo();
            Swal.fire({
              title: "Mensaje",
              text:'Vehiculo eliminado con exito',
              icon:'success'
            });
          }
        });
      }
    });
  }
}
