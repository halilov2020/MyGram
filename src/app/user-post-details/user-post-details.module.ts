import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPostDetailsRoutingModule } from './user-post-details-routing.module';
import { UserPostDetailsComponent } from './user-post-details/user-post-details.component';


@NgModule({
  declarations: [UserPostDetailsComponent],
  imports: [
    CommonModule,
    UserPostDetailsRoutingModule,
  ]
})
export class UserPostDetailsModule { }
