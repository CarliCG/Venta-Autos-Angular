import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaModule } from './paginas/PagListaVehiculo/PaginaModule';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { UserInterceptorService } from './utilitarios/interceptores/UserInterceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginaModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    // {provide:HTTP_INTERCEPTORS, useClass:UserInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
