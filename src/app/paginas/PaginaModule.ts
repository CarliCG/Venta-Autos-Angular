import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PagListaVehiculoComponent } from "./PagListaVehiculo/PagListaVehiculo.component" ;
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PagVehiculoComponent } from "./PagVehiculo/PagVehiculo.component";
import { RouterModule } from "@angular/router";
import { PagVehiculoRegistroComponent } from "./PagVehiculoRegistro/PagVehiculoRegistro.component";
import { HomeComponent } from "./home/home.component";
import { AEspacioPipe } from "../utilitarios/pipes/AEspacio.pipe";

@NgModule ({
    declarations:[
        PagListaVehiculoComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent,
        HomeComponent,
        AEspacioPipe  

    ],

    imports:[
        CommonModule,
        FormsModule,        
        RouterModule,
        ReactiveFormsModule
    ],
    exports:[
        PagListaVehiculoComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent,        
        HomeComponent
    ]

})
export class PaginaModule{

}