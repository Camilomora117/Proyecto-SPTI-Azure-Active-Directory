import { Component, OnInit } from '@angular/core';
import {subasta} from "../../Data/data.subasta";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-crear-subasta',
  templateUrl: './crear-subasta.component.html',
  styleUrls: ['./crear-subasta.component.css']
})
export class CrearSubastaComponent implements OnInit {
  subasta = {
    tags : "",
    id : 0,
    usuario : {
      idUsuario: 1
    },
    nombre : "",
    categoria :{
      id:1,
      name:"Autos"
    },
    descripcion : "",
    duracion:1,
    precio:0,
    activa : true,
    finalizada : false
  };
  costo = 1;
  duracion = 1;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<subasta[]>("https://elgranpostor.azurewebsites.net/version1/subastas/subasta/").subscribe(resp =>{
      this.subasta.id = resp.length + 1;
    }),
      (error:any) =>{
        console.log(error);
    }
  }
  calcularCosto(): void {
    this.costo = this.duracion * (this.subasta.precio * 0.01)
  }

  validarEnvio(): void {
    if (this.subasta.tags == "") {
      alert("Complete todos los datos")
      return;
    }
    if (this.subasta.nombre == "") {
      alert("Complete todos los datos")
      return;
    }
    if (this.subasta.descripcion == "") {
      alert("Complete todos los datos")
      return;
    }
    if (this.subasta.precio < 100000) {
      alert("El precio minimo es de 100000")
      return;
    }
    this.http.post<subasta>("https://elgranpostor.azurewebsites.net/version1/subastas/add",this.subasta).subscribe(dat =>{
      console.log(dat)
    })

  }


}
