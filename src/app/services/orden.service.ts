import{Injectable}from'@angular/core';
import{Http,Response,Headers,RequestOptions}from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import{Orden}from '../models/orden';
import{GLOBAL}from'./global';

@Injectable()
export class OrdenServices{

public url: string;
public headers;

constructor( private _http: Http){
    this.url=GLOBAL.url;
    this.headers = new Headers();
             this.headers.append('Access-Control-Allow-Headers', 'Content-Type'); 
                     this.headers.append('Access-Control-Allow-Methods', 'GET');    
                          this.headers.append('Access-Control-Allow-Origin', '*');
}


addOrden(orden: Orden) :Observable<Orden> {
  let json = JSON.stringify(orden);
  let params = 'json='+json;
  let headers = new Headers({'Content-Type':'application/x-www-form-urlencode'});

  return this._http.post(this.url+'Order/',params,{headers:headers}).pipe(map(res=>{
 
    return res.json();

  }));
}
}