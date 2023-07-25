import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { TestErrorComponent } from './test-error/test-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrprComponent } from './server-errpr/server-errpr.component';
import {ToastrModule} from 'ngx-toastr';



@NgModule({
  declarations: [NavBarComponent,
    TestErrorComponent,
    NotFoundComponent,
    ServerErrprComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass:'toastr-bottom-full-width',
      preventDuplicates: true

    })
  ],
  exports:[NavBarComponent]
})
export class CoreModule { }
