import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterloginComponent } from './registerlogin/registerlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';


const routes: Routes = [

  { path: '', component: RegisterloginComponent, children: [{ path: 'register', component: RegistrationComponent }, { path: 'login', component: LoginComponent }] },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'admin', component: AdminloginComponent },
  { path: 'admindashboard', component: AdmindashboardComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
