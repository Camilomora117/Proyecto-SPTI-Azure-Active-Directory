import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent } from '@azure/msal-angular'
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { ProfileComponent } from './profile/profile.component';
import { AzureAdDemoService } from './azure-ad-demo.service';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MsalModule.forRoot(new PublicClientApplication({
      auth: {
        clientId:'4decc0c0-8022-4698-bc7e-6d2a498d6f5b',
        authority: 'https://login.microsoftonline.com/368e69d2-6e39-4f7d-a4c2-c1af88eeab75',
        redirectUri: 'http://localhost:4200'
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE,
      }
    }),{
      interactionType: InteractionType.Redirect,
      authRequest:{
        scopes:['user.read']
      }
    }, {
      interactionType:InteractionType.Redirect,
      protectedResourceMap: new Map(
        [
          ['https://graph.microsoft.com/v1.0/me',['user.Read']]
        ]
      )
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:MsalInterceptor,
    multi:true
  }, MsalGuard, AzureAdDemoService],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
