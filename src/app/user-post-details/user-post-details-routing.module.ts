import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPostDetailsComponent } from './user-post-details/user-post-details.component';

const routes: Routes = [
  {
    path: ":id",
    component: UserPostDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPostDetailsRoutingModule { }
