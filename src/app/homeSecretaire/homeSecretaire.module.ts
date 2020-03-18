import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeSecretaireRoutingModule } from './homeSecretaire-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AjoutPatientService } from '../_services/secretaire/ajoutpatient.service';
import { AuthGuard } from '../_guards/index';
import { AuthenticationService} from '../_services/index';
import { DatePipe, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {IdentifierPatienttService } from '../_services/secretaire/identifierpatient.service';
import { UserService } from '../_services/index';
import { RendezVousComponent } from './rendezVous.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AjoutRendez_VousService } from '../_services/secretaire/ajoutrendez_vous.service';
import { DataTableModule, SharedModule, DialogModule, PaginatorModule, DataListModule} from 'primeng/primeng';
import { ChargerRendez_VousService } from '../_services/secretaire/charger_rendez_vous.service';

import { ModificationPatientComponent } from './modificationPatient.component';
import { FactureService } from "../_services/secretaire/facture.service";
import { FactureComponent } from "./facture.component";

import { PayerFactureService } from "../_services/secretaire/payerfacture.service";
import { InputTextModule } from "primeng/components/inputtext/inputtext";
import { IdentifierComponent } from "app/homeSecretaire/identifier.component";
import { FullLayoutSecretaireComponent } from "app/homeSecretaire/layouts/full-layoutSecretaire.component";
import { BreadcrumbsComponent } from "app/homeSecretaire/shared/breadcrumb.component";
import { SIDEBAR_TOGGLE_DIRECTIVES } from "app/homeSecretaire/shared/sidebar.directive";
import { AsideToggleDirective } from "app/homeSecretaire/shared/aside.directive";
import { NAV_DROPDOWN_DIRECTIVES } from "app/homeSecretaire/shared/nav-dropdown.directive";
import { DashboardComponent } from "app/homeSecretaire/dashboard.component";
import { AjoutPatientComponent } from "app/homeSecretaire/ajoutPatient.component";
import { CarouselModule } from "ngx-bootstrap";
import {ButtonModule} from 'primeng/primeng';

import { RadioButtonModule, PasswordModule } from 'primeng/primeng';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ProfileComponent } from "app/homeSecretaire/profile.component";
import { AjoutUserService } from "app/_services/admin/ajoutUser.service";
import { ChatComponent } from "app/homeSecretaire/chat.component";
import { GMapModule, FieldsetModule } from 'primeng/primeng';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";


const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
   
 
};

@NgModule({
  imports: [FieldsetModule,GMapModule,MaterialModule,FlexLayoutModule,PerfectScrollbarModule.forRoot(perfectScrollbarConfig),PasswordModule,DropdownModule,TabsModule,InputTextModule,RadioButtonModule,ButtonModule,DataTableModule, CarouselModule,SharedModule, DialogModule, PaginatorModule, DataListModule,CommonModule, HomeSecretaireRoutingModule,ReactiveFormsModule,FormsModule,HttpModule,NgbModule ],
  declarations: [   ChatComponent,ProfileComponent,FullLayoutSecretaireComponent,AjoutPatientComponent,DashboardComponent ,IdentifierComponent,FactureComponent,RendezVousComponent,ModificationPatientComponent,NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective ],
  exports: [ChatComponent,ProfileComponent,FullLayoutSecretaireComponent,AjoutPatientComponent,IdentifierComponent,FactureComponent,RendezVousComponent,ModificationPatientComponent],
  providers: [AjoutUserService,PayerFactureService,FactureService,
        AuthGuard,
        AuthenticationService,
         AjoutPatientService,
      IdentifierPatienttService,
      UserService,
      AjoutRendez_VousService,
      ChargerRendez_VousService,
        // providers used to create fake backend
          {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }
    ],
  
})
export class HomeSecretaireModule {
constructor(){

console.log("bo7");

}

}

