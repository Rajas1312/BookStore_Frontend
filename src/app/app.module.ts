import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
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
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterloginComponent } from './components/registerlogin/registerlogin.component';
import { ClarityModule } from '@clr/angular';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import '@cds/core/icon/register.js';
import { ClarityIcons, bookIcon, mapIcon, bugIcon, searchIcon, userIcon, shoppingCartIcon, plusCircleIcon, minusCircleIcon } from '@cds/core/icon';
import { AddbooksComponent } from './components/addbooks/addbooks.component';
import { GetbooksComponent } from './components/getbooks/getbooks.component';
import { UsergetbookComponent } from './components/usergetbook/usergetbook.component';
import { AddtocartComponent } from './components/addtocart/addtocart.component';
import { OrderComponent } from './components/order/order.component';
import { AuthguardService } from './service/authguard.service';
ClarityIcons.addIcons(bookIcon, mapIcon, bugIcon, searchIcon, userIcon, shoppingCartIcon, plusCircleIcon, minusCircleIcon);

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
    AddtocartComponent,
    OrderComponent,


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
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
