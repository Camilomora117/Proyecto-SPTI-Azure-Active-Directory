import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';


@Component({
  selector: 'router-outlet',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private msalService: MsalService){
    
  }

  idAdmin(): boolean{
    return this.msalService.instance.getActiveAccount().name == "Juju Tu papa"
  }

  ngOnInit(): void {
  }

  isAdmin(): boolean{
    return
  }
}
