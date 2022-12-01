import { Component, OnInit} from '@angular/core';
import { subasta } from '../../Data/data.subasta';
import { appService } from '../../app.service';
import { AzureAdDemoService } from 'src/app/azure-ad-demo.service';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css', '../../app.component.css']
})
export class PantallaPrincipalComponent implements OnInit {
 
  subastas!: subasta[];
  isUserLoggedIn: boolean = false;

  constructor(
    private azureAdDemoservice: AzureAdDemoService,
    private mainService: appService
    ) {
      this.getSubastas();
     }

  ngOnInit(): void {
    this.azureAdDemoservice.isUserLoggedIn.subscribe(
      x=>{
        this.isUserLoggedIn=x;
      }
    )
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

  filtronombre(nombre: string){
    if(nombre != ""){
      this.subastas = this.subastas.filter(subasta => subasta.nombre.includes(nombre));
    }else{
      this.getSubastas();
    }
  }

  filtrocategoria(categoria: string){

  }
}