import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from "./shop/shop.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from './home/home.module';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { ErrorInterceptor } from './core/interceptor/error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from './core/core.module';


@NgModule({
    declarations: [
        AppComponent 
    ],
    
    providers: [

        {  provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

    ],


    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        HomeModule,
        CoreModule
         
        
    ]
})
export class AppModule { }
