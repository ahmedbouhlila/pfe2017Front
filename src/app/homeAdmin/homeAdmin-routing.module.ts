import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { HomeAdminComponent } from './homeAdmin.component';

import { AuthGuard } from '../_guards/index';
import { AjoutUserComponent } from './ajoutUser.component';
import { GestionUserComponent } from "./gestionUser.component";
import { GestionPatientComponent } from "./gestionPatient.component";
import { GestionRendezVousComponent } from "./gestionRendezVous.component";
import { OrdonnanceGlobaleComponent } from "./ordonnanceGlobale.component";
import { FullLayoutAdminComponent } from "app/homeAdmin/layouts/full-layoutAdmin.component";
import { ChatComponent } from "app/homeAdmin/chat.component";
import { CaisseComponent } from "app/homeAdmin/caisse.component";
import { ProfileComponent } from "app/homeAdmin/profile.component";



const routes: Routes = [
  {
    path: '',
     component:  FullLayoutAdminComponent ,canActivate: [AuthGuard],
    data: {
      title: ''
    },
    
    children: [
      {
        path: 'acceuil',
        component:HomeAdminComponent,canActivate: [AuthGuard],
        data: {
          title: 'acceuil'
        }
      },
  {
        path: 'ajoutuser',
        component:  AjoutUserComponent,canActivate: [AuthGuard],
        data: {
          title: ' ajoutuser'
        }
      },
 {
        path: 'chat',
        component:  ChatComponent,canActivate: [AuthGuard],
        data: {
          title: 'chat'
        }
      },
  {
        path: 'caisse',
        component:  CaisseComponent,canActivate: [AuthGuard],
        data: {
          title: 'caisse'
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
        path: 'gestionuser',
        component: GestionUserComponent,canActivate: [AuthGuard],
        data: {
          title: 'gestionuser'
        }
      },
      {
        path: 'gestionpatient',
        component: GestionPatientComponent,canActivate: [AuthGuard],
        data: {
          title: 'gestionpatient'
        }
      },
     {
        path: 'gestionrendezvous',
        component: GestionRendezVousComponent,canActivate: [AuthGuard],
        data: {
          title: 'gestionrendezvous'
        }},
          {
        path: 'ordonnanceglobale',
        component: OrdonnanceGlobaleComponent,canActivate: [AuthGuard],
        data: {
          title: 'ordonnanceglobale'
        }
      }
     
      
     
    ]
  },
];














@NgModule({
  imports: [ RouterModule.forChild(routes )],
  exports: [RouterModule]
})
export class HomeAdminRoutingModule { }
