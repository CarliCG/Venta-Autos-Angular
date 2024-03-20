import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PagListaVehiculoComponent } from "./PagListaVehiculo.component" ;

@NgModule ({
    declarations:[
        PagListaVehiculoComponent
    ],

    imports:[
        CommonModule
    ],
    exports:[
        PagListaVehiculoComponent
    ]

})
export class PaginaModule{

}