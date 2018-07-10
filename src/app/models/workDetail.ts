import{RequiredProducts} from './requiredProducts'


export class WorkDetail{
    constructor( public workDetailId:number ,
        public  descproductsPriceription:number,
        public  description:string,
        public  workOrderId:number,
        public products:Array<RequiredProducts>

    ){
      

     }

    }

    