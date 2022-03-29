import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CarePlanEditComponent } from './care-plan-edit/care-plan-edit.component';
import { NotFoundComponent } from './Errors/not-found/not-found.component';
import { TestErrorsComponent } from './Errors/test-errors/test-errors.component';
import { HomeComponent } from './home/home.component';
import { PatientAddRemoveEditComponent } from './patient-add-remove-edit/patient-add-remove-edit.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListEditComponent } from './patient-list-edit/patient-list-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { RegisterStaffdetailsComponent } from './register/register-staffdetails/register-staffdetails.component';
import { RegisterComponent } from './register/register.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { MessagesComponent } from './staff/messages/messages.component';
import { ProfileComponent } from './staff/profile/profile.component';
import { AuthGuard } from './_guards/auth.guard';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';

const routes: Routes = [

  {
    path: '', 
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: '', component: HomeComponent},
      {path: 'profile/:username',  component: ProfileComponent},
      {path: 'profiles/edit',  component: StaffEditComponent, canDeactivate: [PreventUnsavedChangesGuard]},
      {path: 'admin/register', component: RegisterComponent},
      {path: 'admin/patientEdit', component: PatientAddRemoveEditComponent},
      {path: 'admin/patientEdit/editForm/:id', component: PatientEditComponent},
      {path: 'admin/patientEdit/editForm/:id/carePlan', component: CarePlanEditComponent},
      {path: 'admin/patientRegister', component: RegisterPatientComponent}, 
      {path: 'admin/register/registerDetails/:username', component:RegisterStaffdetailsComponent},
      {path: 'patients',  component: PatientListComponent},
      {path: 'messages',  component: MessagesComponent},
      {path: 'not-found', component: NotFoundComponent},
      {path: 'admin', component: AdminComponent}, 
      {path: 'server-error', component: ServerErrorComponent},
      {path:'patients/:id', component: PatientDetailsComponent},
      {path: 'patientListEdit/:username', component: PatientListEditComponent}
    ]
  },
  {path:'errors', component: TestErrorsComponent},
  {path: '**',  component: NotFoundComponent, pathMatch: 'full'},
  {path: '',  component: HomeComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
