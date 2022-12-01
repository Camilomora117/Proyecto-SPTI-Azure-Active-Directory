import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserUtils } from '@azure/msal-browser';
import { ProfileComponent } from './profile/profile.component';
import { MsalGuard } from '@azure/msal-angular';


const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  }
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation:'enabledNonBlocking'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
