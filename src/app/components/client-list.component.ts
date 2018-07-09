import{Component}from '@angular/core';
import{Router, ActivatedRoute,Params}from '@angular/router';
import {Listar_clientServices} from '../services/clientLista.service';
import{Client} from '../models/client';
@Component({
    selector:'client-list',
    templateUrl:'../views/client-list.html',
    providers:[Listar_clientServices] 
 })
 export class ClientListComponent{
     public titulo:string;
     public client: Client[];
     constructor(
private _route: ActivatedRoute,
private _router: Router,
private _clientService: Listar_clientServices

     ){
         this.titulo='Listado de Clientes';
     }
     ngOnInit(){
         console.log('client-list.component.ts cargado')

      this._clientService.getClientes().subscribe(
      result=>{
       //  this.client = result.data;
        // if(result.code !=200){
      //       console.log(result)
      //   }else{
     //        this.client=result.data;
      //   }


      },error=>{
         console.log(<any>error);
       }
     );

     }
 }