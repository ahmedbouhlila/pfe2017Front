import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    DatepickerModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
