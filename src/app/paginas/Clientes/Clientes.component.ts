import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Clientes',
  templateUrl: './Clientes.component.html',
  styleUrls: ['./Clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToHome() {
    this.router.navigateByUrl('/home'); // Utiliza navigateByUrl si deseas redirigir a una ruta específica
    // this.router.navigate(['/home']); // O utiliza navigate si prefieres navegar por la ruta relativa
  }

}