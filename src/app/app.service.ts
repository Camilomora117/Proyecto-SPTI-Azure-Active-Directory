import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { subasta } from 'src/app/Data/data.subasta';

@Injectable({
    providedIn: 'root'
  })

export class appService{ 

    constructor(
        private http: HttpClient
      ) { }

    public getSubastas(): Observable<subasta[]>{
        return this.http.get<subasta[]>("https://elgranpostor.azurewebsites.net/version1/subastas/subasta/")
    }
}