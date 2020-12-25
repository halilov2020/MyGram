import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_core/guards/auth.guard';
import { UnSavedChangesGuard } from '../_core/guards/un-saved-changes.guard';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    canDeactivate: [UnSavedChangesGuard],
    component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileEditRoutingModule { }
