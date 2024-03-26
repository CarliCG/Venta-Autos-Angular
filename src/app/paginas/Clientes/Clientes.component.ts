import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Clientes',
  templateUrl: './Clientes.component.html',
  styleUrls: ['./Clientes.component.css']
})
export class ClientesComponent implements OnInit {
  mostrarTarjeta: boolean = false; // Variable para controlar la visibilidad de la tarjeta

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleTarjeta(event: any) {
    if (event.target.checked) {
      this.mostrarTarjeta = true; // Mostrar la tarjeta si el checkbox está marcado
    } else {
      this.mostrarTarjeta = false; // Ocultar la tarjeta si el checkbox no está marcado
    }
  }
  

  redirectToHome() {
    this.router.navigateByUrl('/home');
  }
}
