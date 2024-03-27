import { HttpClient, HttpHeaders, } from '@angular/common/http'; import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://www.epico.gob.ec/vehiculo/public/api';
  httpOptions = {
    //que tipo de dato le estamos pasando
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // getUser(): Observable<cliente> {
  //   return this.http.get<UserData>(this.baseUrl + '/cliente' ).pipe(
  //     map(respuesta => respuesta.nombre)
  //   );
  // }

  addUser(cliente: cliente) {
    console.log('Realizando solicitud POST para agregar un nuevo usuario:', cliente);

    return this.http.post<UserData>(this.baseUrl + '/cliente/', cliente, this.httpOptions);
  }

}

export interface cliente {
  id: string;
  nombre?: string;
  apellido?: string;
  password?: string;
  telefono?: string|null;
  email?: string|null;
}
// Define una interfaz para los datos del usuario
export interface UserData {
  nombre: string;
  apellido: string;
  password: string;
  email: string;
  telefono: string;
}
