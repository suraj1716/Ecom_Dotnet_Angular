import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { ShopModule } from './shop/shop.module';




@NgModule({
  declarations: [
    AppComponent,

  
  ],

  
  imports: [
    ShopModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
