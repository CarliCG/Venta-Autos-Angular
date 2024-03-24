import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PagListaVehiculoComponent } from './paginas/PagListaVehiculo/PagListaVehiculo.component';
import { PagNotFoundComponent } from './paginas/PagNotFound/PagNotFound.component';
import { PagVehiculoComponent } from './paginas/PagVehiculo/PagVehiculo.component';
import { PagVehiculoRegistroComponent } from './paginas/PagVehiculoRegistro/PagVehiculoRegistro.component';
import { ClientesComponent } from './paginas/Clientes/Clientes.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'vehiculos',
    component: PagListaVehiculoComponent
  },
  {
    path: 'vehiculo',
    component: PagVehiculoRegistroComponent
  },
  { path: "clientes", 
  component: ClientesComponent
 },
  {
    path: 'vehiculos/:codigo',
    component: PagVehiculoComponent
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    //Para todos los paths que no cumplieron
    path: '**',
    component: PagNotFoundComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
