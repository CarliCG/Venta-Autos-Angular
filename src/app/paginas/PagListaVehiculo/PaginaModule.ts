import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PagListaVehiculoComponent } from "./PagListaVehiculo.component" ;
import { FormsModule } from "@angular/forms";
import { UtilitariosModule } from "../../utilitarios/UtilitariosModule";

@NgModule ({
    declarations:[
        PagListaVehiculoComponent
    ],

    imports:[
        CommonModule,
        FormsModule,
        UtilitariosModule
    ],
    exports:[
        PagListaVehiculoComponent
    ]

})
export class PaginaModule{

}