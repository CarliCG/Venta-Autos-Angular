import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PagListaVehiculoComponent } from './paginas/PagListaVehiculo/PagListaVehiculo.component';
import { PagNotFoundComponent } from './paginas/PagNotFound/PagNotFound.component';
import { PagVehiculoComponent } from './paginas/PagVehiculo/PagVehiculo.component';
import { PagVehiculoRegistroComponent } from './paginas/PagVehiculoRegistro/PagVehiculoRegistro.component';
import { ClientesComponent } from './paginas/Clientes/Clientes.component';
import { PagVehiculoEditarComponent } from './paginas/PagVehiculoEditar/PagVehiculoEditar.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    //lista general de los vehiculos
    path: 'vehiculos',
    component: PagListaVehiculoComponent
  },
  {
    //vehiculos para registro agregar uno nuevo
    path: 'vehiculo',
    component: PagVehiculoRegistroComponent
  },
//registro de clientes
  { path: "clientes", 
  component: ClientesComponent
 },
  {
//vehiculos por codigo 
    path: 'vehiculos/:codigo',
    component: PagVehiculoComponent
  },
  {
    //editar vehiculos por codigo 
        path: 'editar/:codigo',
        component: PagVehiculoEditarComponent
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
