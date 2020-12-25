import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileEditRoutingModule } from './profile-edit-routing.module';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from '../_core/guards/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    ProfileEditRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard
  ]
})
export class ProfileEditModule { }
