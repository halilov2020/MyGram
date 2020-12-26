import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_core/guards/auth.guard';

const routes: Routes = [
  {
    path:"auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "feed",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feed/feed.module").then(m => m.FeedModule)
  },
  {
    path: "profile",
    canActivate:[AuthGuard],
    loadChildren: () => import("./profile/profile.module").then(m => m.ProfileModule)
  },
  {
    path: "edit",
    canActivate: [AuthGuard],
    loadChildren: () => import("./profile-edit/profile-edit.module").then(m => m.ProfileEditModule)
  },
  {
    path: "user-post-details",
    canActivate: [AuthGuard],
    loadChildren: () => import("./user-post-details/user-post-details.module").then(m => m.UserPostDetailsModule)
  },
  {
    path:"followers",
    canActivate: [AuthGuard],
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
