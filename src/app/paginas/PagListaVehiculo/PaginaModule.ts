import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PagListaVehiculoComponent } from "./PagListaVehiculo.component" ;
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtilitariosModule } from "../../utilitarios/UtilitariosModule";
import { PagVehiculoComponent } from "../PagVehiculo/PagVehiculo.component";
import { RouterModule } from "@angular/router";
import { PagVehiculoRegistroComponent } from "../PagVehiculoRegistro/PagVehiculoRegistro.component";
import { PagNotFoundComponent } from "../PagNotFound/PagNotFound.component";
import { HomeComponent } from "../home/home.component";

@NgModule ({
    declarations:[
        PagListaVehiculoComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent,
        PagNotFoundComponent,
        HomeComponent
    ],

    imports:[
        CommonModule,
        FormsModule,
        UtilitariosModule,
        RouterModule,
        ReactiveFormsModule
    ],
    exports:[
        PagListaVehiculoComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent,
        PagNotFoundComponent,
        HomeComponent
    ]

})
export class PaginaModule{

}