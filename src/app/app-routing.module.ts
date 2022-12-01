import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserUtils } from '@azure/msal-browser';
import { ProfileComponent } from './profile/profile.component';
import { MsalModule } from '@azure/msal-angular';


const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  }
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {initialNavigation:'enabledNonBlocking'}),
    MsalModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
