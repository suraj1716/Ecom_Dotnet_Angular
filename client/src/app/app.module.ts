import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from "./shop/shop.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from './home/home.module';

import { ErrorInterceptor } from './core/interceptor/error.interceptor';

import { CoreModule } from './core/core.module';
import{NgxSpinnerModule} from 'ngx-spinner';
import { LoadingInterceptor } from './core/interceptor/loading.interceptors';


@NgModule({
    declarations: [
        AppComponent,
        
    ],
    
    providers: [

        {  provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        {  provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
        

    ],


    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        HomeModule,
        CoreModule,
        NgxSpinnerModule
         
        
    ]
})
export class AppModule { }
