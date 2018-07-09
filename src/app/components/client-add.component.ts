import{Component} from'@angular/core';
import {Router, ActivatedRoute, Params} from'@angular/router';

import{Listar_clientServices}from'../services/clientLista.service';
import{Client}from '../models/Client';

@Component({
    selector: 'client-add',
    templateUrl:'../views/client-add.html',
    providers:[Listar_clientServices]
})
export class ClientAddComponent{
    public titulo: string;
    public client: Client;
    constructor(
        private _clientService : Listar_clientServices,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titulo='Crear un nuevo cliente'
        this.client=new Client('','','','','');
    }

    ngOnInit(){

        console.log('client-add.component.ts cargado...')

    }

    onSubmit(){
        console.log(this.client);

    //    this._clientService.addClient(this.client).subscribe(
     //       response =>{
       //         if(response.code==200){
         //           this._router.navigate(['/client'])
        //        }else{
          //          console.log(response);
           //     }

          //  },
           // error=>{
            //    console.log(<any>error)
            //}

       // )

    }
}
