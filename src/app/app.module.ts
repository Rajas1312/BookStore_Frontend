import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AuthGuard } from './auth-guard.service';

import { RouterModule } from '@angular/router';
//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
//import { FlexLayoutModule } from '@angular/flex-layout';
//import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterloginComponent } from './registerlogin/registerlogin.component';
import { ClarityModule } from '@clr/angular';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import '@cds/core/icon/register.js';
import { ClarityIcons, bookIcon, mapIcon, bugIcon, searchIcon, userIcon, shoppingCartIcon } from '@cds/core/icon';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { GetbooksComponent } from './getbooks/getbooks.component';
import { UsergetbookComponent } from './usergetbook/usergetbook.component';
ClarityIcons.addIcons(bookIcon, mapIcon, bugIcon, searchIcon, userIcon, shoppingCartIcon);

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    RegisterloginComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    AddbooksComponent,
    GetbooksComponent,
    UsergetbookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonToggleModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
