import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StaffEditComponent } from '../staff-edit/staff-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: StaffEditComponent): boolean  {
      if(component.editForm.dirty){
        return confirm('Are you sure you want to continue? Unsaved changes will be lost');
      }
    return true;
  }
  
}
