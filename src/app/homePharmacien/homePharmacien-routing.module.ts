import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';


import { AuthGuard } from '../_guards/index';

import { AfficherDossierComponent } from "./afficherdossier.component";
import { AfficherDetailsComponent } from "./afficherdetails.component";
import { FacturePharmacienComponent } from "./facturePharmacien.component";
import { Routes } from '@angular/router';
import { FullLayoutPharmacienComponent } from "app/homePharmacien/layouts/full-layoutPharmacien.component";
import { IdentifierComponent } from "./identifier.component";
import { DashboardComponent } from "app/homePharmacien/dashboard.component";
import { AjoutMedicamentsComponent } from "app/homePharmacien/ajoutMedicaments.component";
import { ProfileComponent } from "app/homePharmacien/profile.component";
import { ChatComponent } from "app/homePharmacien/chat.component";


const routes: Routes = [
  {
    path: '',
     component:  FullLayoutPharmacienComponent,canActivate: [AuthGuard],
    data: {
      title: ''
    },
    
    children: [
      {
        path: 'afficherdossier',
        component:AfficherDossierComponent,canActivate: [AuthGuard],
        data: {
          title: 'afficherdossier'
        }
      },
  {
        path: 'identifier',
        component:  IdentifierComponent,canActivate: [AuthGuard],
        data: {
          title: ' identifier'
        }
      }, {
        path: 'chat',
        component:  ChatComponent,canActivate: [AuthGuard],
        data: {
          title: 'chat'
        }
      },
     
      {
        path: 'afficherdetails',
        component: AfficherDetailsComponent,canActivate: [AuthGuard],
        data: {
          title: 'afficherdetails'
        }
      },
       {
        path: 'profile',
        component:  ProfileComponent,canActivate: [AuthGuard],
        data: {
          title: 'profile'
        }
      },
      {
        path: 'facturepharmacien',
        component: FacturePharmacienComponent,canActivate: [AuthGuard],
        data: {
          title: 'facturepharmacien'
        }
      },
     {
        path: 'acceuil',
        component: DashboardComponent,canActivate: [AuthGuard],
        data: {
          title: 'acceuil'
        }},
          {
        path: 'Gestionmedicaments',
        component: AjoutMedicamentsComponent,canActivate: [AuthGuard],
        data: {
          title: 'Gestionmedicaments'
        }
      }
     
      
     
    ]
  },
];














@NgModule({
  imports: [ RouterModule.forChild(routes )],
  exports: [RouterModule]
})
export class HomePharmacienRoutingModule { }
