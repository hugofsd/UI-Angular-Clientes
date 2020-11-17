import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//impotações prime ng
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';
import {CardModule} from 'primeng/card';
import { ConsultaComponent } from './consulta/consulta.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import { LaudoComponent } from './laudo/laudo.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import {AccordionModule} from 'primeng/accordion';
import { FaturaComponent } from './fatura/fatura.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ConsultaComponent,
    LaudoComponent,
    AjudaComponent,
    FaturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    TabMenuModule,
    TableModule,
    ChartModule,
    CardModule,
    InputNumberModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    AccordionModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
