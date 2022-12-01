import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular'
import {IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

export function MSALInstanceFactory(): IPublicClientApplication{
  return new PublicClientApplication({
    auth: {
      clientId: "4decc0c0-8022-4698-bc7e-6d2a498d6f5b",
      redirectUri: "http://localhost:4200",
      authority:'https://login.microsoftonline.com/368e69d2-6e39-4f7d-a4c2-c1af88eeab75'
    }
  })
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule
  ],
  providers: [{
    provide: MSAL_INSTANCE,
    useFactory: MSALInstanceFactory,
  },
  MsalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
