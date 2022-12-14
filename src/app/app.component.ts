import { Component, OnInit} from '@angular/core';

import { MsalService} from '@azure/msal-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prueba';

  constructor(private msalService: MsalService){
    
  }

  ngOnInit(): void {
      this.msalService.instance.handleRedirectPromise().then(
        res => {
          if (res != null && res.account != null) {
            this.msalService.instance.setActiveAccount(res.account)
          }
        }
      )
  }

  isLoggedIn() : boolean{
    return (this.msalService.instance.getAllAccounts().length != 0)
  }
 
  login(){
    this.msalService.loginRedirect();
  }
    
  logout(){ 
    this.msalService.logoutRedirect();
  }

}
