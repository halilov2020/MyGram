import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed/feed.component';
import { UserPostComponent } from './user-post/user-post.component';
import { RouterModule } from '@angular/router';
import { TruncatePipe } from '../_shared/truncate.pipe';


@NgModule({
  declarations: [
    FeedComponent,
    UserPostComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    RouterModule,
  ],
  providers: [TruncatePipe]
})
export class FeedModule { }
