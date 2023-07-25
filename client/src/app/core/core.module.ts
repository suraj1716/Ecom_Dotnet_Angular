import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { TestErrorComponent } from './test-error/test-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrprComponent } from './server-errpr/server-errpr.component';
import {ToastrModule} from 'ngx-toastr';
import{BreadcrumbModule} from 'xng-breadcrumb';
import { SectionHeaderComponent } from './section-header/section-header.component';




@NgModule({
  declarations: [NavBarComponent,
    TestErrorComponent,
    NotFoundComponent,
    ServerErrprComponent,
    SectionHeaderComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
  BreadcrumbModule,
    ToastrModule.forRoot({
      positionClass:'toastr-bottom-full-width',
      preventDuplicates: true

    }),
    
  ],
  exports:[NavBarComponent, SectionHeaderComponent]
})
export class CoreModule { }
