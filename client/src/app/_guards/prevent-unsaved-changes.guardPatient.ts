import { Injectable } from '@angular/core';
import {CanDeactivate} from '@angular/router';
import { PatientEditComponent } from '../patient-edit/patient-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: PatientEditComponent): boolean  {
      if(component.editFormPatient.dirty){
        return confirm('Are you sure you want to continue? Unsaved changes will be lost');
      }
    return true;
  }
  
}
