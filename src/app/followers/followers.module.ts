import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowersRoutingModule } from './followers-routing.module';
import { FollowerCardComponent } from './follower-card/follower-card.component';
import { FollowersListComponent } from './followers-list/followers-list.component';


@NgModule({
  declarations: [
    FollowerCardComponent,
    FollowersListComponent
  ],
  imports: [
    CommonModule,
    FollowersRoutingModule,
  ]
})
export class FollowersModule { }
