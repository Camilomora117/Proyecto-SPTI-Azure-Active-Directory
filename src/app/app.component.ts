import { Component, Inject , OnDestroy, OnInit } from '@angular/core';

import { InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { RedirectClient } from '@azure/msal-browser/dist/internals';
import { RedirectParams } from '@azure/msal-browser/dist/interaction_handler/RedirectHandler';
import { environment } from 'src/environments/environment';
import { AzureAdDemoService } from 'src/app/azure-ad-demo.service';
import { MsalBroadcastService, MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'prueba';
  isUserLoggedIn: boolean = false;
  private readonly _destroy = new Subject<void>();

  constructor(
  @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig:MsalGuardConfiguration,
  private msalBroadCastService: MsalBroadcastService,
  private authService: MsalService,
  private azureAdDemoservice: AzureAdDemoService,
  ){}

  ngOnDestroy(): void {
    this._destroy.next(undefined);
    this._destroy.complete();
  }

  ngOnInit(){
    this.msalBroadCastService.inProgress$.pipe(
      filter((interactionStatus: InteractionStatus) =>
      interactionStatus==InteractionStatus.None),
      takeUntil(this._destroy)).subscribe(x =>{
        this.isUserLoggedIn = this.authService.instance.getAllAccounts().length>0
        this.azureAdDemoservice.isUserLoggedIn.next(this.isUserLoggedIn);
      })
  }

login(){
  if(this.msalGuardConfig.authRequest){
    this,this.authService.loginRedirect({...this.msalGuardConfig.authRequest} as RedirectRequest)
  }else{
    this.authService.loginRedirect();
  }
}
  
logout(){ 
  this.authService.logoutRedirect({postLogoutRedirectUri: environment.postLogoutUrl});
}

}
