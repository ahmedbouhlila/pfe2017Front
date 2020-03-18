import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Routes} from '@angular/router';



import { AuthGuard } from '../_guards/index';

import { RendezVousComponent } from './rendezVous.component';
import { ModificationPatientComponent } from './modificationPatient.component';
import { FactureComponent } from "./facture.component";
import { IdentifierComponent } from "app/homeSecretaire/identifier.component";
import { FullLayoutSecretaireComponent } from "app/homeSecretaire/layouts/full-layoutSecretaire.component";
import { DashboardComponent } from "app/homeSecretaire/dashboard.component";
import { AjoutPatientComponent } from "app/homeSecretaire/ajoutPatient.component";
import { ProfileComponent } from "app/homeSecretaire/profile.component";
import { ChatComponent } from "app/homeSecretaire/chat.component";



const routes: Routes = [
  {
    path: '',
     component:  FullLayoutSecretaireComponent,canActivate: [AuthGuard],
    data: {
      title: ''
    },
    
    children: [
      {
        path: 'rendezvous',
        component: RendezVousComponent,canActivate: [AuthGuard],
        data: {
          title: 'rendezvous'
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
        path: 'profile',
        component:  ProfileComponent,canActivate: [AuthGuard],
        data: {
          title: 'profile'
        }
      },
     
      {
        path: 'modifierpatient',
        component: ModificationPatientComponent,canActivate: [AuthGuard],
        data: {
          title: 'modifierpatient'
        }
      },
      {
        path: 'facturepatient',
        component: FactureComponent,canActivate: [AuthGuard],
        data: {
          title: 'facturepatient'
        }
      },
     {
        path: 'acceuil',
        component: DashboardComponent,canActivate: [AuthGuard],
        data: {
          title: 'acceuil'
        }
      },
     
       {
        path: 'ajoutpatient',
        component: AjoutPatientComponent,canActivate: [AuthGuard],
        data: {
          title: 'ajoutpatient'
        }
      }
     
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeSecretaireRoutingModule { }