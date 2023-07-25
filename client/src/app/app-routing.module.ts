import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrprComponent } from './core/server-errpr/server-errpr.component';

const routes: Routes = [
{path:'',component:HomeComponent,  data:{breadcrumb:'Home'}},
{path:'test-error',component:TestErrorComponent, data:{breadcrumb:'Test Errors'}},
{path:'server-error',component:ServerErrprComponent,  data:{breadcrumb:'server Errors'}},
{path:'not-found',component:NotFoundComponent,  data:{breadcrumb:'Not Found'}},
{path:'shop',loadChildren:()=>import('./shop/shop.module').then(mod=>mod.ShopModule),  data:{breadcrumb:'shop'}},

{path:'**',redirectTo: 'not-found', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
