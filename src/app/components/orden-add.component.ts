import{Component} from'@angular/core';
import {Router, ActivatedRoute, Params} from'@angular/router';

import{OrdenServices}from'../services/orden.service';
import{Orden}from '../models/orden';

@Component({
    selector: 'orden-add',
    templateUrl:'../views/orden-add.html',
    providers:[OrdenServices]
})
export class OrdenAddComponent{
    public titulo: string;
    public orden: Orden;
    constructor(
        private _ordenService : OrdenServices,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titulo='Crear una nueva Orden'
        this.orden=new Orden('','','','','');
    }

    ngOnInit(){

        console.log('orden-add.component.ts cargado...')

    }

    onSubmit(){
        console.log(this.orden);

        this._ordenService.addOrden(this.orden).subscribe(
           response =>{
                if(response){
                    this._router.navigate(['/order'])
              }else{
                   console.log(response);
                }

          },
            error=>{
                console.log(<any>error)
            }

        )

    }
}
