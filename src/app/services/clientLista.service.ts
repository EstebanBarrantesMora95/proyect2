import{Injectable}from'@angular/core';
import{Http,Response,Headers,RequestOptions}from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import{Client}from '../models/client';
import{GLOBAL}from'./global';


@Injectable()
export class Listar_clientServices{

public url: string;
constructor( private _http: Http){
    this.url=GLOBAL.url;
}
getClientes(){
    return this._http.get(this.url+'Client').pipe(map(res =>{
    
    }));
    
}

addClient(client: Client){
  let json = JSON.stringify(client);
  let params = 'json='+json;
  let headers = new Headers({'Content-Type':'application/x-www-form-urlencode'});

  //return this._http.post(this.url+'client',params,{headers:headers}).pipe(map(res=>res,json()));
}
}