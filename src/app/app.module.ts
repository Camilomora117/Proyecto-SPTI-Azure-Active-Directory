import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaPrincipalComponent } from './Views/pantalla-principal/pantalla-principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { CrearSubastaComponent } from './Views/crear-subasta/crear-subasta.component';
import { FormsModule } from '@angular/forms';
import { MisSubastasComponent } from './Views/mis-subastas/mis-subastas.component';
import { DetalleSubastaComponent } from './Views/detalle-subasta/detalle-subasta.component'; 

import { MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent } from '@azure/msal-angular'
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { ProfileComponent } from './profile/profile.component';
import { PujaSubastaComponent } from './Views/puja-subasta/puja-subasta.component';
import { AzureAdDemoService } from './azure-ad-demo.service';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;


@NgModule({
  declarations: [
    AppComponent,
    PantallaPrincipalComponent,
    CrearSubastaComponent,
    MisSubastasComponent,
    DetalleSubastaComponent,
    ProfileComponent,
    PujaSubastaComponent
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
        clientId:'48b81b58-149e-4a2b-8e7e-070c0586a1b8',
        authority: 'https://login.microsoftonline.com/adad22ad-d3c9-4783-a7c8-9aa2777bf35a',
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
