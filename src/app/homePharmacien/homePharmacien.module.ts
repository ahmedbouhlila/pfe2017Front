import {NgModule} from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';


import { HomePharmacienRoutingModule } from './homePharmacien-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';




import { DataTableModule, SharedModule, DialogModule, InputTextModule, RadioButtonModule, ButtonModule } from 'primeng/primeng';

import { HttpModule } from "@angular/http";
import { UserService } from "../_services/user.service";
import { AfficherDossierService } from "../_services/pharmacien/afficherdossier.service";
import { AfficherDossierComponent } from "./afficherdossier.component";
import { IdentifierPatienttService } from "../_services/pharmacien/identifierpatient.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AfficherDetailsService } from "../_services/pharmacien/afficherdetails.service";
import { AfficherDetailsComponent } from "./afficherdetails.component";
import { FacturePharmacienComponent } from "./facturePharmacien.component";
import { ChargerFactureService } from "../_services/pharmacien/chargerfacture.service";
import { ValiderFactureService } from "../_services/pharmacien/validerfacture.service";
import { PaginatorModule } from "primeng/components/paginator/paginator";
import { DataListModule } from "primeng/components/datalist/datalist";
import { IdentifierComponent } from "app/homePharmacien/identifier.component";

import { DashboardComponent } from "app/homePharmacien/dashboard.component";
import { BreadcrumbsComponent } from "app/homePharmacien/shared/breadcrumb.component";
import { SIDEBAR_TOGGLE_DIRECTIVES } from "app/homePharmacien/shared/sidebar.directive";
import { AsideToggleDirective } from "app/homePharmacien/shared/aside.directive";
import { NAV_DROPDOWN_DIRECTIVES } from "app/homePharmacien/shared/nav-dropdown.directive";
import { AuthGuard } from "app/_guards";
import { AuthenticationService } from "app/_services";
import { FullLayoutPharmacienComponent } from "app/homePharmacien/layouts/full-layoutPharmacien.component";
import { AjoutMedicamentsComponent } from "app/homePharmacien/ajoutMedicaments.component";
import { AjoutMedicamentsService } from "app/_services/pharmacien/ajoutMedicaments.service";
import {CheckboxModule} from 'primeng/primeng';
import { SpinnerModule, PasswordModule } from 'primeng/primeng';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from "ngx-bootstrap";
import { TabsModule } from 'ng2-bootstrap/tabs';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ProfileComponent } from "app/homePharmacien/profile.component";
import { AjoutUserService } from "app/_services/admin/ajoutUser.service";
import { ChatComponent } from "app/homePharmacien/chat.component";
import {GMapModule} from 'primeng/primeng';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
   
 
};


@NgModule({
  imports: [GMapModule,MaterialModule,FlexLayoutModule,PerfectScrollbarModule.forRoot(perfectScrollbarConfig),PasswordModule,DropdownModule,TabsModule,SpinnerModule,CheckboxModule,InputTextModule,RadioButtonModule,ButtonModule,DataTableModule,NgbModule,CarouselModule,FormsModule,HttpModule,CommonModule, HomePharmacienRoutingModule,ReactiveFormsModule,InputTextModule,DataTableModule, SharedModule,DialogModule,PaginatorModule, DataListModule ],
  declarations: [   ChatComponent,ProfileComponent,AjoutMedicamentsComponent,FacturePharmacienComponent,AfficherDetailsComponent,AfficherDossierComponent, FullLayoutPharmacienComponent,DashboardComponent ,IdentifierComponent,NAV_DROPDOWN_DIRECTIVES, BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective ],
  exports: [ ChatComponent,ProfileComponent,AjoutMedicamentsComponent,FacturePharmacienComponent,AfficherDetailsComponent,AfficherDossierComponent,IdentifierComponent ,FullLayoutPharmacienComponent] ,
  providers: [ AjoutUserService,AuthGuard,AjoutMedicamentsService,
        AuthenticationService,UserService, ValiderFactureService,ChargerFactureService,AfficherDetailsService,IdentifierPatienttService,UserService,AfficherDossierService ,{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
})
export class HomePharmacienModule {constructor(){}}
 