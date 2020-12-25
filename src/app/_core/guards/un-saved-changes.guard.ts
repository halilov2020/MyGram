import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { EditComponent } from 'src/app/profile-edit/edit/edit.component';

@Injectable({
  providedIn: 'root'
})
export class UnSavedChangesGuard implements CanDeactivate<RegisterComponent|LoginComponent|EditComponent> {
  canDeactivate(
    component: RegisterComponent|LoginComponent|EditComponent,
      currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
      nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(
      (component instanceof RegisterComponent && component.registerForm.dirty) || 
      (component instanceof LoginComponent && component.loginForm.dirty) ||
      (component instanceof EditComponent && component.editForm.dirty)
      ){
      return window.confirm("You have some unsaved changes. Are you sure you want to exit?");
    }
    return true;
  }
  
}
