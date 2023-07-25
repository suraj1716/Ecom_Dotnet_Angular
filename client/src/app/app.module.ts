import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from "./shop/shop.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from './home/home.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        
        BrowserAnimationsModule,
        HomeModule,
        
        
    ]
})
export class AppModule { }
