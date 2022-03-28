import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LockedComponent } from './locked/locked.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { OtpModalComponent } from './otp-modal/otp-modal.component';  


const routes: Routes = [
 
  

  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'set-password',
    component: SetPasswordComponent
  },
  {
    path: 'otp',
    component: OtpModalComponent
  },
  {
    path: 'locked',
    component: LockedComponent
  },
  {
    path: 'page404',
    component: Page404Component
  },
  {
    path: 'page500',
    component: Page500Component
  },
   
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
