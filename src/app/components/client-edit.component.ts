import{Component} from'@angular/core';
import {Router, ActivatedRoute, Params} from'@angular/router';

import{Listar_clientServices}from'../services/clientLista.service';
import{Client}from '../models/Client';

@Component({
    selector: 'client-edit',
    templateUrl:'../views/client-edit.html',
    providers:[Listar_clientServices]
})
export class ClientEditComponent{
public titulo: string;
public client: Client;

}