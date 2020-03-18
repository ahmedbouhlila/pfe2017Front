import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';
 import {Ng2BootstrapModule } from 'ngx-bootstrap';
//Layouts

 import { LoginComponent } from "app/login";
 import { AuthGuard } from "app/_guards";
 import { AuthenticationService, UserService } from "app/_services";
 import { FormsModule } from "@angular/forms";
 import { HttpModule } from "@angular/http";


 import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { MotDePassOublierComponent } from "app/login/motdepassoublier.component";
import {GrowlModule} from 'primeng/primeng';

@NgModule({
  imports: [GrowlModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
           HttpModule,
    AppRoutingModule,
    Ng2BootstrapModule.forRoot(),
    DropdownModule.forRoot(),
    TabsModule.forRoot(),
    NgbModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    LoginComponent,
    AppComponent,
MotDePassOublierComponent,
     
      
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective
  ],
  providers: [
     AuthGuard,
        AuthenticationService,
        UserService,
        {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
