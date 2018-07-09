import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from'@angular/http';
import{FormsModule}from'@angular/forms';


//Rutas
import {routing, appRoutingProviders}from './app.routing'

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home.components';
import {ErrorComponent} from './components/error.components';
import {ClientListComponent} from './components/client-list.component';
import{ClientAddComponent} from './components/client-add.component';

import {Listar_clientServices} from './services/clientLista.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ClientListComponent,
    ClientAddComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders,
    Listar_clientServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
