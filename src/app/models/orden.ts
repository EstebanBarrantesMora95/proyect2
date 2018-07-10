export class Orden{
    constructor( public workOrderId:number ,
        public  description:string,
        public  tentativeDate:Date,
        public  detailsPrice:number,
        public  laborPrice:number,
        public  clientIdentification:string,
        public  licenseNumber:string
    ){
      
    }

    }

    