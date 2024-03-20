import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PagListaVehiculoComponent } from "./PagListaVehiculo.component" ;
import { FormsModule } from "@angular/forms";

@NgModule ({
    declarations:[
        PagListaVehiculoComponent
    ],

    imports:[
        CommonModule,
        FormsModule
    ],
    exports:[
        PagListaVehiculoComponent
    ]

})
export class PaginaModule{

}