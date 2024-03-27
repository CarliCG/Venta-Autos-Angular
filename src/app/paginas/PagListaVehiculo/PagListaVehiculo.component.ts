import { Component, OnInit } from '@angular/core';
import { VehiculoService, Respuesta, Vehiculo } from '../../servicios/Vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagListaVehiculo',
  templateUrl: './PagListaVehiculo.component.html',
  styleUrls: ['./PagListaVehiculo.component.css']
})
export class PagListaVehiculoComponent implements OnInit {
  constructor(private vehiculoService: VehiculoService) { }
  public mostrarImagen = false;
  public listaVehiculos: Array<Vehiculo> = [];
  private _filtro: string = '';
  public rows: number = 10;
  public page: number = 1;
  public pages: number = 0;
  public filtro: string = '';


  ngOnInit() {
    this.consultarVehiculos();

  }

  consultarVehiculos() {
    
    this.vehiculoService.getVehiculos(this.filtro, this.rows, this.page).subscribe(respuesta => {
       
          this.listaVehiculos = respuesta.data;
          this.pages = respuesta.pages;
          this.paginar(this.pages);
          console.log('Lista de vehículos actualizada:', this.listaVehiculos);

      }, error => {
        console.log(error);
        
      }
    );
}


  cambiarpagina(pagina: number) {
    this.page = pagina;
    this.consultarVehiculos();
  }

  listaPaginas: Array<number> = [];

  paginar(pages: number) {
    this.listaPaginas = [];
    for (let i = 1; i <= this.pages; i++) {
      this.listaPaginas.push(i);
    }
  }

  siguiente() {
    if (this.page < this.page) {
      this.page++;
      this.consultarVehiculos();
    }
  }

  atras() {
    if (this.page > 1) {
      this.page--;
      this.consultarVehiculos();
    }
  }
  eliminar(codigo: string) {
    Swal.fire({
      title: "Seguro que deseas eliminar este registro?",
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      icon: 'question'
    }).then((res) => {
      if (res.isConfirmed) {
        this.vehiculoService.eliminarVehiculo(codigo).subscribe(data => {
          if (data.codigo == '1') {
            // this.consultarVehiculos();
            Swal.fire({
              title: "Mensaje",
              text: 'Vehiculo eliminado con exito',
              icon: 'success'
            });
          } else {
            Swal.fire({
              title: "Mensaje",
              text: 'No se pudo eliminar el registro: ' + data.mensaje,
              icon: 'error'
            });
          }
        });
      }
    });
  }
}
