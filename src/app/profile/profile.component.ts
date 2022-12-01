import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'router-outlet',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
  }

  isAdmin(): boolean{
    return
  }
}
