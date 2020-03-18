import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HomeMedecinComponent } from './homeMedecin.component';
import { Routes} from '@angular/router';
import { AuthGuard } from '../_guards/index';
import { VisiteComponent } from'./visite.component';

import { AjoutOrdonnanceComponent } from './ajoutOrdonnance.component';
import { ChargerDossierComponent } from "./chargerdossier.component";
import { ChargerDetailsComponent } from "./chargerdetails.component";
import { FullLayoutMedecinComponent } from "app/homeMedecin/layouts/full-layoutMedecin.component";
import { DashboardComponent } from "app/homeMedecin/dashboard.component";
import { GestionCongerComponent } from "app/homeMedecin/gestionConger.component";
import { ModifierOrdonnanceComponent } from "app/homeMedecin/modifierordonnance.component";
import { EcrireOrdonnanceComponent } from "app/homeMedecin/ecrireordonnance.component";
import { ProfileComponent } from "app/homeMedecin/profile.component";
import { ChatComponent } from "app/homeMedecin/chat.component";



const routes: Routes = [
  {
    path: '',
     component:  FullLayoutMedecinComponent,canActivate: [AuthGuard],
    data: {
      title: ''
    },
    
    children: [
      {
        path: 'homeMedecin',
        component: HomeMedecinComponent,canActivate: [AuthGuard],
        data: {
          title: 'homeMedecin'
        }
      },
  {
        path: 'visite',
        component:  VisiteComponent,canActivate: [AuthGuard],
        data: {
          title: 'visite'
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
        path: 'profile',
        component:  ProfileComponent,canActivate: [AuthGuard],
        data: {
          title: 'profile'
        }
      },
     
      {
        path: 'ajoutordonnance',
        component: AjoutOrdonnanceComponent,canActivate: [AuthGuard],
        data: {
          title: 'ajoutordonnance'
        }
      },
      {
        path: 'chargerdossier',
        component: ChargerDossierComponent,canActivate: [AuthGuard],
        data: {
          title: 'chargerdossier'
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
        path: 'gestionconger',
        component: GestionCongerComponent,canActivate: [AuthGuard],
        data: {
          title: 'gestionconger'
        }
      },
       {
        path: 'chargerdetails',
        component: ChargerDetailsComponent,canActivate: [AuthGuard],
        data: {
          title: 'chargerdetails'
        }
      },
    
 {
        path: 'modifierordonnance',
        component:  ModifierOrdonnanceComponent,canActivate: [AuthGuard],
        data: {
          title: 'modifierordonnance'
        }
      },

 {
        path: 'ecrireordonnance',
        component:  EcrireOrdonnanceComponent ,canActivate: [AuthGuard],
        data: {
          title: 'ecrireordonnance'
        }
      }

    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeMedecinRoutingModule { }


