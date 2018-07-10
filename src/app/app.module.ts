import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from'@angular/http';
import{FormsModule}from'@angular/forms';


//Rutas
import {routing, appRoutingProviders}from './app.routing'

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home.components';
import {ErrorComponent} from './components/error.components';
import {OrdenAddComponent} from './components/orden-add.component';
import {ClientListComponent} from './components/client-list.component';
import{ClientAddComponent} from './components/client-add.component';

import {Listar_clientServices} from './services/clientLista.service';
import {OrdenServices} from './services/orden.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ClientListComponent,
    ClientAddComponent,
    OrdenAddComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders,
    Listar_clientServices,
    OrdenServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
