import {NgModule} from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';

import {HomeMedecinComponent }  from './homeMedecin.component'
import { HomeMedecinRoutingModule } from './homeMedecin-routing.module';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChargerRendez_VousService } from '../_services/medecin/chargerrendez_vous.service';
import {PaginatorModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import { AuthGuard } from '../_guards/index';
import { VisiteComponent } from'./visite.component';
import { BrowserModule } from '@angular/platform-browser';
import {AjoutOrdonnanceComponent} from './ajoutOrdonnance.component';
import { UserService } from '../_services/index';
import {AjoutOrdonnanceService} from '../_services/medecin/ajoutOrdonnance.service' 
import {  DialogModule } from 'primeng/primeng';
import { AjoutCreneauxService } from "../_services/medecin/ajoutcreneaux.service";

import { ChargerCreneauxService } from "../_services/medecin/creneaux.service";
import {ChargerOrdonnanceService} from '../_services/medecin/chargerOrdonnance.service';
import {ChargerPrescriptionService} from'../_services/medecin/chargerPrescription.service';
import {InputTextareaModule} from 'primeng/primeng';
import { AjoutVisiteService } from '../_services/medecin/ajoutVisite.service';
import { ChargerDossierComponent } from "./chargerdossier.component";
import { ChargerDossierService } from "../_services/medecin/chargerdossier.service";
import { ChargerDetailsComponent } from "./chargerdetails.component";
import { ChargerDetailsService } from "../_services/medecin/chargerdetails.service";
import { FullLayoutMedecinComponent } from "app/homeMedecin/layouts/full-layoutMedecin.component";
import { NAV_DROPDOWN_DIRECTIVES } from "app/homeMedecin/shared/nav-dropdown.directive";
import { BreadcrumbsComponent } from "app/homeMedecin/shared/breadcrumb.component";
import { SIDEBAR_TOGGLE_DIRECTIVES } from "app/homeMedecin/shared/sidebar.directive";
import { AsideToggleDirective } from "app/homeMedecin/shared/aside.directive";
import { DashboardComponent } from "app/homeMedecin/dashboard.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from "ngx-bootstrap";
import {GMapModule} from 'primeng/primeng';
import { ScheduleModule } from 'primeng/primeng';
import { GestionCongerComponent } from "app/homeMedecin/gestionConger.component";
import { ModifierOrdonnanceComponent } from "app/homeMedecin/modifierordonnance.component";
import { EcrireOrdonnanceComponent } from "app/homeMedecin/ecrireordonnance.component";
import { TabsModule } from 'ng2-bootstrap/tabs';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ProfileComponent } from "app/homeMedecin/profile.component";
import { AjoutUserService } from "app/_services/admin/ajoutUser.service";
import { PasswordModule, SpinnerModule } from 'primeng/primeng';
import { ChatComponent } from "app/homeMedecin/chat.component";
import { QuillModule } from 'ngx-quill';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
   
 
};

@NgModule({


  imports: [SpinnerModule,QuillModule,MaterialModule,FlexLayoutModule,PerfectScrollbarModule.forRoot(perfectScrollbarConfig),PasswordModule,DropdownModule,TabsModule,CommonModule,GMapModule,ButtonModule,ScheduleModule,CarouselModule,DialogModule ,HomeMedecinRoutingModule,InputTextareaModule,ReactiveFormsModule,FormsModule,HttpModule,PaginatorModule,DataTableModule,SharedModule,DataListModule ],
  declarations: [ ChatComponent,ProfileComponent,FullLayoutMedecinComponent,EcrireOrdonnanceComponent ,ModifierOrdonnanceComponent,GestionCongerComponent,DashboardComponent,ChargerDetailsComponent ,ChargerDossierComponent,HomeMedecinComponent,VisiteComponent,AjoutOrdonnanceComponent,NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective ],
  exports: [ ChatComponent,ProfileComponent,FullLayoutMedecinComponent,ChargerDetailsComponent,ChargerDossierComponent,HomeMedecinComponent,VisiteComponent,AjoutOrdonnanceComponent],
  providers: [AjoutUserService,ChargerDetailsService,ChargerDossierService,AjoutVisiteService,ChargerPrescriptionService,ChargerOrdonnanceService,ChargerRendez_VousService, AuthGuard,UserService,AjoutOrdonnanceService,ChargerCreneauxService,AjoutCreneauxService,      {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
})
export class HomeMedecinModule {}


