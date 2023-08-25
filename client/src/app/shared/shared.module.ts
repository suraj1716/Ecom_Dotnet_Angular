import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';



@NgModule({
  declarations: [
    OrderTotalsComponent
  ],
  imports: [
   
    CommonModule,
  PaginationModule.forRoot(),
    FormsModule,
    CarouselModule.forRoot(),
    
  ],

  exports:[
    PaginationModule, 
    CarouselModule, 
    OrderTotalsComponent
  ]
  
})
export class SharedModule { }
