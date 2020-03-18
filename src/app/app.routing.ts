import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { LoginComponent } from "app/login";
import { FullLayoutAdminComponent } from "app/homeAdmin/layouts/full-layoutAdmin.component";
import { FullLayoutPharmacienComponent } from "app/homePharmacien/layouts/full-layoutPharmacien.component";
import { FullLayoutMedecinComponent } from "app/homeMedecin/layouts/full-layoutMedecin.component";
import { FullLayoutSecretaireComponent } from "app/homeSecretaire/layouts/full-layoutSecretaire.component";
import { AppComponent } from "app/app.component";
import { MotDePassOublierComponent } from "app/login/motdepassoublier.component";

export const routes: Routes = [
  
  {
    
    path: 'homeSecretaire',
    component: AppComponent,
    data: {
      title: 'homeSecretaire'
    },
     children: [    
       {
        path: '',
        loadChildren: './homeSecretaire/homeSecretaire.module#HomeSecretaireModule'
      },
     ]
  },
 {
    
    path: 'homeMedecin',
    component: AppComponent,
    data: {
      title: 'homeMedecin'
    },
     children: [
      {
        path: '',
        loadChildren: './homeMedecin/homeMedecin.module#HomeMedecinModule'
      },
     ]
  }, {
    
    path: 'homePharmacien',
    component: AppComponent,
    data: {
      title: 'homePharmacien'
    },
     children: [
      {
        path: '',
        loadChildren: './homePharmacien/homePharmacien.module#HomePharmacienModule'
      },
     ]
  }, {
    
    path: 'homeAdmin',
    component: AppComponent,
    data: {
      title: 'homeAdmin'
    },
     children: [
      {
        path: '',
        loadChildren: './homeAdmin/homeAdmin.module#HomeAdminModule'
      },
     ]
  },

  {
    
    path: '',
    component: LoginComponent,
    data: {
      title: 'login'
    },
 
  },
 
 {
    
    path: 'motdepassoublier',
    component:  MotDePassOublierComponent,
    data: {
      title: 'mot de passe oublier'
    },
 
  }


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
