import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { Page500Component } from './page500/page500.component';
import { Page404Component } from './page404/page404.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LockedComponent } from './locked/locked.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 
import { MatSelectModule } from '@angular/material/select';
import { SetPasswordComponent } from './set-password/set-password.component';
import { OtpModalComponent } from './otp-modal/otp-modal.component';
@NgModule({
  declarations: [
    Page500Component,
    Page404Component,
    SigninComponent,
    SignupComponent,
    LockedComponent,
    ForgotPasswordComponent,
    SetPasswordComponent,
    OtpModalComponent
  ],
  imports: [
    CommonModule, 
 FormsModule,
 MatSelectModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AuthenticationModule {}
