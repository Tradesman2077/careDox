import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Errors/not-found/not-found.component';
import { TestErrorsComponent } from './Errors/test-errors/test-errors.component';
import { HomeComponent } from './home/home.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { MessagesComponent } from './staff/messages/messages.component';
import { ProfileComponent } from './staff/profile/profile.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: '', component: HomeComponent},
      {path: 'profile/:username',  component: ProfileComponent},
      {path: 'patients',  component: PatientListComponent},
      {path: 'messages',  component: MessagesComponent},
      {path: 'not-found', component: NotFoundComponent},
      {path: 'server-error', component: ServerErrorComponent},
      {path:'patients/:id', component: PatientDetailsComponent}
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
