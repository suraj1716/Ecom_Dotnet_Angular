import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './Models/product';
import { IPagination } from './Models/pagination';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SurajEcom';
  products: IProduct[] = [];
  

constructor(private http: HttpClient)
{

}

  ngOnInit(): void {
    this.http.get("https://localhost:5108/api/products?PageSize=50").subscribe(
      (response: IPagination)=>{

      this.products=response.data;

    }, error=>{
      console.log(error);
    });
    
  }
 
}
