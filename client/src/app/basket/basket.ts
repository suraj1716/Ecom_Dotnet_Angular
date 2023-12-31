import { v4 as uuidv4, v4  } from 'uuid';
import * as uuid from 'uuid';


export interface IBasket {
    id?: string
    items?: IBasketItem[] |null
  }
  
  export interface IBasketItem {
    id: number
    productName: string
    price: number
    quantity: number
    pictureUrl: string
    brand: string
    type: string
  }

  export class Basket implements IBasket{
      items: IBasketItem[]= [] ;
       id: string = uuid.v4();
     

  }

  export interface IBasketTotals{
    shipping: number;
    subtotal: number;
    total: number

  }

  