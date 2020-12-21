import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './_core/guards/auth-guard.service';

const routes: Routes = [
  {
    path:"auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "feed",
    canActivate: [AuthGuardService],
    loadChildren: () => import("./feed/feed.module").then(m => m.FeedModule)
  },
  {
    path: "profile",
    canActivate:[AuthGuardService],
    loadChildren: () => import("./profile/profile.module").then(m => m.ProfileModule)
  },
  {
    path: "user-post-details",
    canActivate: [AuthGuardService],
    loadChildren: () => import("./user-post-details/user-post-details.module").then(m => m.UserPostDetailsModule)
  },
  {
    path:"followers",
    canActivate: [AuthGuardService],
    loadChildren: () => import("./followers/followers.module").then(m => m.FollowersModule)
  },
  {
    path:"**",
    loadChildren: () => import("./page-not-found/page-not-found.module").then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
