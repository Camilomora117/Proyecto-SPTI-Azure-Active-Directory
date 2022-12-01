import { Component, OnInit } from '@angular/core';

import { subasta } from '../../Data/data.subasta';
import { appService } from '../../app.service';

@Component({
  selector: 'app-mis-subastas',
  templateUrl: './mis-subastas.component.html',
  styleUrls: ['./mis-subastas.component.css', '../../app.component.css']
})
export class MisSubastasComponent implements OnInit {

  subastas!: subasta[];

  constructor(private mainService: appService) {
    this.getSubastas();
   }

  ngOnInit(): void {
    
  }

  getSubastas(){
    this.mainService.getSubastas().subscribe((listsubastas: subasta[]) => {
      this.subastas = listsubastas
    }, (err: any) => {
      console.log(err);
    });
  }

  filtroid(id: string){
    if(id != ""){
      this.subastas = this.subastas.filter(subasta => subasta.id === Number(id));
    }else{
      this.getSubastas();
    }
  }

}
