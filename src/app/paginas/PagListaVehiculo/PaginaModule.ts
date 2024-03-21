import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PagListaVehiculoComponent } from "./PagListaVehiculo.component" ;
import { FormsModule } from "@angular/forms";
import { UtilitariosModule } from "../../utilitarios/UtilitariosModule";
import { PagVehiculoComponent } from "../PagVehiculo/PagVehiculo.component";
import { RouterModule } from "@angular/router";

@NgModule ({
    declarations:[
        PagListaVehiculoComponent,
        PagVehiculoComponent
    ],

    imports:[
        CommonModule,
        FormsModule,
        UtilitariosModule,
        RouterModule
    ],
    exports:[
        PagListaVehiculoComponent,
        PagVehiculoComponent
    ]

})
export class PaginaModule{

}