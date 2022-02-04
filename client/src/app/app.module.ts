import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component'
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MessagesComponent } from './staff/messages/messages.component';
import { ProfileComponent } from './staff/profile/profile.component';
import { SharedModule } from './_modules/shared.module';
import { TestErrorsComponent } from './Errors/test-errors/test-errors.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { NotFoundComponent } from './Errors/not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientCardComponent } from './patient-card/patient-card.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { AdminComponent } from './admin/admin.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { PatientListEditComponent } from './patient-list-edit/patient-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MessagesComponent,
    ProfileComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    PatientListComponent,
    PatientCardComponent,
    PatientDetailsComponent,
    AdminComponent,
    StaffEditComponent,
    RegisterPatientComponent,
    PatientListEditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    SharedModule,
    NgxSpinnerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
