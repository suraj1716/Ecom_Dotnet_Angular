import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Basket, IBasket, IBasketItem } from './basket';
import { __values } from 'tslib';
import { IProduct } from '../shared/Models/product';


@Injectable({
  providedIn: 'root'
})
export class BasketService {

  baseUrl = environment.apiUrl;
  private basketSource = new BehaviorSubject<IBasket | any>(null);
  basket$ = this.basketSource.asObservable();
  private basketTotalSource = new BehaviorSubject<IBasket | any>(null);
  basketTotal = this.basketTotalSource.asObservable();
  basketTotal$: any;

  constructor(private http: HttpClient) { }

  getBasket(id: string) {
    return this.http.get(this.baseUrl + 'basket?id=' + id)
      .pipe(
        map((basket: IBasket) => {
          this.basketSource.next(basket);
          this.calculateTotals();


        })
      );

  }


  setBasket(basket: IBasket) {

    return this.http.post(this.baseUrl + 'basket', basket).subscribe((response: IBasket) => {
      this.basketSource.next(response);
      this.calculateTotals();
    }, error => {

      console.log(error);

    })
  }


  getCurrentBasketValue() {

    return this.basketSource.value;

  }

  addItemToBasket(item: IProduct, quantity = 1) {
    const itemToAdd: IBasketItem = this.mapProductItemToBasket(item, quantity);
    const basket = this.getCurrentBasketValue() ?? this.createBasket();
    basket.items = this.addOrUpdateItem(basket.items!, itemToAdd, quantity);
    this.setBasket(basket);
  }

  incrementItemQuantity(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();
    const foundItemIndex = basket.items.findIndex((x: { id: number; }) => x.id === item.id);
    basket.items[foundItemIndex].quantity++;
    this.setBasket(basket);
  }

  decrementItemQuantity(item: IBasketItem) {
    const basket = this.getCurrentBasketValue() ;
    let foundItemIndex = basket.items.findIndex((x: { id: number; }) => x.id === item.id) ?? [];
    if (basket.item[undefined??foundItemIndex].quantity > 1) {
      basket.items[foundItemIndex].quantity--;
      this.setBasket(basket);
    }
    else {
      this.removeItemFromBasket(item);
    }
    this.setBasket(basket);
  }


  removeItemFromBasket(item: IBasketItem) {
    const basket=this.getCurrentBasketValue();
    if(basket.items.som((x: { id: number; })=>x.id===item.id))
    {
      basket.items=basket.items.filter((i: { id: number; })=>i.id===item.id);
      if(basket.items.length>0)
      {
        this.setBasket(basket);
        
      }else{
        this.deleteBasket(basket);
      }
    }
  }


  deleteBasket(basket: any) {
    return this.http.delete(this.baseUrl + 'basket?id' + basket.id).subscribe(()=>{
      this.basketSource.next(null);
      this.basketTotalSource.next(null);
      localStorage.removeItem('basket_id');
    }, error=>{
      console.log(error);

    });
  }



  private calculateTotals() {

    const basket = this.getCurrentBasketValue();
    const shipping = 0;
    const subtotal = basket.items.reduce((a: number, b: { price: number; quantity: number; }) => (b.price * b.quantity) + a, 0);
    const total = subtotal + shipping;
    this.basketTotalSource.next({ shipping, total, subtotal })

  }



  addOrUpdateItem(items: IBasketItem[], itemToAdd: IBasketItem, quantity: number): IBasketItem[] | undefined {

    console.log(items)
    const index = items?.findIndex(i => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items?.push(itemToAdd);

    } else {
      items![index!].quantity! += quantity;


    }

    return items;


  }



  private createBasket(): IBasket {
    const basket = new Basket();
    localStorage.setItem('basket_id', basket.id);
    return basket;
  }


  mapProductItemToBasket(item: IProduct, quantity: number): IBasketItem {
    return {
      id: item.id,
      productName: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl,
      quantity: quantity,
      brand: item.productBrand,
      type: item.productType

    };
  }

}
