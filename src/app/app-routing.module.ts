import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { LaudoComponent } from './laudo/laudo.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { FaturaComponent } from './fatura/fatura.component'

const routes: Routes = [

  {path: 'dashboard',component: DashboardComponent},
  {path: 'consulta',component: ConsultaComponent},
  {path: 'laudo',component: LaudoComponent},
  {path: 'fatura', component: FaturaComponent},
  {path: 'ajuda',component: AjudaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
