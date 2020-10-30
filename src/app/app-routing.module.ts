import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  {path: 'dashboard',component: DashboardComponent},
  {path: 'consulta',component: ConsultaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
