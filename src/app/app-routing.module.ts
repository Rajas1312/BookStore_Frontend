import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterloginComponent } from './components/registerlogin/registerlogin.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AddtocartComponent } from './components/addtocart/addtocart.component';


const routes: Routes = [

  { path: '', component: RegisterloginComponent, children: [{ path: 'register', component: RegistrationComponent }, { path: 'login', component: LoginComponent }] },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'admin', component: AdminloginComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'userdashboard', component: DashboardComponent },
  { path: 'cart', component: AddtocartComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
