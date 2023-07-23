import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../shared/Models/product';
import { ShopService } from './shop.service';
import { IBrand } from '../shared/Models/brand';
import { IType } from '../shared/Models/ProductType';
import{ShopParams} from '../shared/Models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {
  @ViewChild('search', { static: true }) searchTerm!: ElementRef | any ;
  products:IProduct[] | undefined | null;
  brands:IBrand[] | undefined;
  types:IType[] | undefined;
  shopParams=new ShopParams();
  totalCount: number | undefined;
 
  sortOptions=[
    {name: 'Alphabetical' , value:'name'},
    {name:'Price: Low to High', value:'priceAsc'},
    {name:'Price High to Low', value:'priceDesc'}


  ];

constructor(private shopService:ShopService){}

  ngOnInit()
  {
    this.getProducts();
    this.getBrands();
    this.getTypes();

  }

  getProducts(){
    this.shopService.getProducts(this.shopParams).subscribe(response=>{
      this.products= response!.data;
      this.shopParams.pageNumber=response!.pageIndex;
      this.shopParams.pageSize=response!.pageSize;
      this.totalCount=response!.count;
    },error=>{console.log(error);
    
    });

  }

  getBrands(){
    this.shopService.getBrands().subscribe(response=>{
      this.brands=[{id:0, name:"All"}, ...response];
    },error=>{console.log(error);
    
    });

  }

  getTypes(){
    this.shopService.getTypes().subscribe(response=>{
      this.types=[{id:0, name:"All"}, ...response];
    },error=>{console.log(error);
    
    });

  }

  onBrandSelected(brandId:number)
  {
    this.shopParams.brandId=brandId;
    this.shopParams.pageNumber= 1;
    this.getProducts();
  }

  onTypeSelected(typeId: number)
  {
    this.shopParams.typeId=typeId;
    this.shopParams.pageNumber= 1;
    this.getProducts();

  }

onSortSelected(sort: string)
{
  this.shopParams.sort=sort;
  this.getProducts();

}

onSearch(){
this.shopParams.search= this.searchTerm.nativeElement.value;
this.shopParams.pageNumber= 1;
this.getProducts();

}

onReset(){
this.searchTerm.nativeElement.value= " ";
this.shopParams=new ShopParams();
this.getProducts();

}

}
