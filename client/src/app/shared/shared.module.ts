import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
   
    CommonModule,
  PaginationModule.forRoot(),
    FormsModule,
    CarouselModule.forRoot(),
    
  ],

  exports:[PaginationModule, CarouselModule]
  
})
export class SharedModule { }
