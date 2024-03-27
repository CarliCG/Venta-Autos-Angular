import { Injectable } from '@angular/core';
// import { Vehiculo } from '../utilitarios/Modelos/Vehiculo';
import { Observable, from, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://www.epico.gob.ec/vehiculo/public/api/';
  httpOptions = {
    //que tipo de dato le estamos pasando
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

 //Realiza una solicitud GET para obtener todos los vehículos. Retorna un Observable de tipo Vehiculo[].
 getVehiculos(filtro?: string, rows?: number, page?: number): Observable<Respuesta> {
  let body = new HttpParams();
  body = filtro ? body.set('filtro', filtro) : body;
  body = rows ? body.set('rows', rows) : body;
  body = page ? body.set('page', page) : body;
  console.log('Realizando solicitud GET para obtener todos los vehículos con los parámetros:', body.toString());
  return this.http.get<Respuesta>(this.baseUrl + 'vehiculos/', { params: body });
}


  //si uso el diseno para recibir Json entonces ya no uso httpParams
  //Realiza una solicitud POST para insertar un nuevo vehículo en la API. Recibe un objeto Vehiculo como parámetro y retorna un Observable.
  insertVehiculo(vehiculo: Vehiculo) {
    console.log('Realizando solicitud POST para insertar un nuevo vehículo:', vehiculo);
    return this.http.post<Respuesta>(this.baseUrl + 'vehiculo/', vehiculo,this.httpOptions);
  }

  //Realiza una solicitud GET para obtener un vehículo específico por su código.
  getVehiculo(codigo: string) {
    console.log('Realizando solicitud GET para obtener un vehículo específico con código:', codigo);

    return this.http.get<Respuesta>(this.baseUrl + 'vehiculo/' + codigo);
  }
  
//Editar vehiculo. Realiza una solicitud PUT para actualizar la información de un vehículo existente.
  actualizarVehiculo(vehiculo: Vehiculo, codigo: string) {
    console.log('Realizando solicitud PUT para actualizar un vehículo con código:', codigo);
  console.log('Datos del vehículo a actualizar:', vehiculo);
    return this.http.put<Respuesta>(this.baseUrl + 'vehiculo/' + codigo, vehiculo, this.httpOptions);
  }

  //Para eliminar vehiculos (si funciona). Realiza una solicitud DELETE para eliminar un vehículo por su código.
  eliminarVehiculo(codigo:string){
    
    return this.http.delete<Respuesta>(this.baseUrl+'vehiculo/'+codigo);
  }

  // addvehiculo(vehiculo: Vehiculo) {
  //   this.listavehiculos.push(vehiculo);
  // }
  
  // private listavehiculos: Array<Vehiculo> = [
  //   {
  //     'codigo': 'A001',
  //     'marca': 'Toyota',
  //     'modelo': 'Corolla',
  //     'anio': 2019,
  //     'kilometraje': 25000,
  //     'precio': 15000,
  //     'calificacion': 4,
  //     'foto': 'https://www.toyota.com.ec//admin/sites/default/files/2022-07/BLANCO_corolla_sedan.png'
  //   },
  //   {
  //     'codigo': 'A002',
  //     'marca': 'Honda',
  //     'modelo': 'Civic',
  //     'anio': 2018,
  //     'kilometraje': 30000,
  //     'precio': 16000,
  //     'calificacion': 3,
  //     'foto': 'https://cdn.motor1.com/images/mgl/WV6rr/s1/lanzamiento-honda-civic-2017.jpg'
  //   },
  //   {
  //     'codigo': 'A003',
  //     'marca': 'Ford',
  //     'modelo': 'Fiesta',
  //     'anio': 2020,
  //     'kilometraje': 20000,
  //     'precio': 18000,
  //     'calificacion': 5,
  //     'foto': 'https://cdn.motor1.com/images/mgl/Qzrb7/s1/lanzamiento-ford-fiesta-2018-mercosur.jpg'
  //   },
  //   {
  //     'codigo': 'A004',
  //     'marca': 'Chevrolet',
  //     'modelo': 'Spark',
  //     'anio': 2017,
  //     'kilometraje': 35000,
  //     'precio': 14000,
  //     'calificacion': 2,
  //     'foto': 'https://www.ambacar.ec/wp-content/uploads/2018/03/chevrolet-spark-gt.png'
  //   },
  //   {
  //     'codigo': 'A005',
  //     'marca': 'Volkswagen',
  //     'modelo': 'Golf',
  //     'anio': 2016,
  //     'kilometraje': 40000,
  //     'precio': 17000,
  //     'calificacion': 4,
  //     'foto': ''
  //   }
  // ];
}

export interface Vehiculo {
  codigo: string;
  marca: string;
  modelo: string;
  kilometraje?:string;
  precio?:number;
  foto?:string|null;
  anio?:number;
  calificacion?:number;

}
export interface Respuesta {
  codigo: string;
  mensaje: string;
  data: Array<Vehiculo> | Vehiculo|any;
  rows: number;
  pages: number;
  records: number;
  page: number;
}