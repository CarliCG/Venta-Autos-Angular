import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../servicios/Cliente.service';
 // Ruta al servicio UserService

@Component({
  selector: 'app-Clientes',
  templateUrl: './Clientes.component.html',
  styleUrls: ['./Clientes.component.css']
})
export class ClientesComponent implements OnInit {
  mostrarTarjeta: boolean = false; // Variable para controlar la visibilidad de la tarjeta
  id: string='';
  nombre: string = '';
  apellido:string='';
  password: string = '';
  email: string = '';
  telefono: string = '';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  toggleTarjeta(event: any) {
    this.mostrarTarjeta = event.target.checked;
  }

  redirectToHome() {
    this.router.navigateByUrl('/home');
  }

  registrarCliente() {
    const user = {
      id:this.id,
      nombre: this.nombre,
      apellido:this.apellido,
      password: this.password,
      email: this.email,
      telefono: this.telefono
    };
  
    console.log('Datos del usuario a enviar:', user);
  
    this.userService.addUser(user).subscribe(
      response => {
        // Aquí puedes manejar la respuesta de la API si es necesario
        console.log('Cliente registrado exitosamente:', response);
        // Redirigir a la página de inicio u otra página después de registrar el cliente
        this.router.navigateByUrl('/home');
      },
      error => {
        // Aquí puedes manejar los errores que ocurran durante la solicitud
        console.error('Error al registrar cliente:', error);
        // Puedes mostrar un mensaje de error al usuario si lo deseas
      }
    );
  }
  
  
}
