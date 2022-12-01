import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaPrincipalComponent } from './Views/pantalla-principal/pantalla-principal.component'
import { CrearSubastaComponent } from './Views/crear-subasta/crear-subasta.component'
import{ MisSubastasComponent } from './Views/mis-subastas/mis-subastas.component'
import { DetalleSubastaComponent } from './Views/detalle-subasta/detalle-subasta.component'
import { BrowserUtils } from '@azure/msal-browser';
import { ProfileComponent } from './profile/profile.component';
import { MsalGuard } from '@azure/msal-angular';


const routes: Routes = [
  {path: '', component: PantallaPrincipalComponent},
  {path: 'pantalla-principal', component: PantallaPrincipalComponent},
  {path: 'crear-subasta', component: CrearSubastaComponent },
  {path: 'mis-subastas', component: MisSubastasComponent},
  {path: 'detalle-subasta', component: DetalleSubastaComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[MsalGuard]}
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation:'enabledNonBlocking'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
