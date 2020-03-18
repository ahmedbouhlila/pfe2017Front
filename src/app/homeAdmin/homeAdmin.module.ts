import {NgModule} from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';


import { HomeAdminRoutingModule } from './homeAdmin-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AjoutUserComponent } from './ajoutUser.component'
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import {  InputTextModule } from 'primeng/primeng';
import { AjoutUserService } from "../_services/admin/ajoutUser.service";
import { DataTableModule, SharedModule, DialogModule, PaginatorModule, DataListModule } from 'primeng/primeng';
import { UserService } from "../_services/user.service";
import { GestionUserComponent } from "./gestionUser.component";
import { GestionPatientComponent } from "./gestionPatient.component";
import { AjoutPatientService } from "../_services/secretaire/ajoutpatient.service";
import { GestionRendezVousComponent } from "./gestionRendezVous.component";
import { GestionRendezVousService } from "../_services/admin/gestionRendezVous.service";
import { AutoCompleteModule } from 'primeng/primeng';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AjoutRendez_VousService } from '../_services/secretaire/ajoutrendez_vous.service';
import { OrdonnanceGlobaleComponent } from "./ordonnanceGlobale.component";
import { AjoutOrdonnanceGlobaleService } from "../_services/admin/ajourOrdonnanceGlobale.service";
import { ChartsModule } from 'ng2-charts';
import { StatService } from "../_services/admin/stat.service";
import { FullLayoutAdminComponent } from "app/homeAdmin/layouts/full-layoutAdmin.component";

import { BreadcrumbsComponent } from "app/homeAdmin/shared/breadcrumb.component";
import { SIDEBAR_TOGGLE_DIRECTIVES } from "app/homeAdmin/shared/sidebar.directive";
import { AsideToggleDirective } from "app/homeAdmin/shared/aside.directive";
import { NAV_DROPDOWN_DIRECTIVES } from "app/homeAdmin/shared/nav-dropdown.directive";
import { HomeAdminComponent } from "app/homeAdmin/homeAdmin.component";
import { ChargerRendez_VousService } from "app/_services/secretaire/charger_rendez_vous.service";
import {ToggleButtonModule} from 'primeng/primeng';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { MaterialModule, MdIconRegistry } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SortablejsModule, SortablejsOptions } from "angular-sortablejs/dist";
import { ChatComponent } from "app/homeAdmin/chat.component";
import { CaisseComponent } from "app/homeAdmin/caisse.component";
import { IdentifierCaisseService } from "app/_services/admin/caisse.service";
import { ButtonModule } from 'primeng/primeng';
import { ProfileComponent } from "app/homeAdmin/profile.component";
import { PasswordModule } from 'primeng/primeng';
import {GMapModule} from 'primeng/primeng';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
   
 
};

const sortablejsConfig: SortablejsOptions = {
  animation: 300
};
@NgModule({
  imports:  [GMapModule,PasswordModule,ButtonModule,MaterialModule,FlexLayoutModule,PerfectScrollbarModule.forRoot(perfectScrollbarConfig),DropdownModule,TabsModule,ToggleButtonModule,ChartsModule,CommonModule,AutoCompleteModule,NgbModule,
  DataTableModule,SharedModule,DialogModule ,HomeAdminRoutingModule,
  InputTextModule,ReactiveFormsModule,FormsModule,HttpModule,
  PaginatorModule,DataListModule ],
  declarations: [  ProfileComponent,CaisseComponent,ChatComponent,FullLayoutAdminComponent,HomeAdminComponent,NAV_DROPDOWN_DIRECTIVES,BreadcrumbsComponent,OrdonnanceGlobaleComponent,GestionRendezVousComponent 
  ,GestionPatientComponent,AjoutUserComponent,GestionUserComponent, SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective  ],
  exports: [ ProfileComponent,CaisseComponent,ChatComponent,OrdonnanceGlobaleComponent,GestionRendezVousComponent ,
  GestionPatientComponent,AjoutUserComponent,GestionUserComponent],
   providers: [ IdentifierCaisseService,StatService,AjoutOrdonnanceGlobaleService,AjoutRendez_VousService,
   GestionRendezVousService,ChargerRendez_VousService,AjoutPatientService,AjoutUserService,UserService, { provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
})
export class HomeAdminModule {}


