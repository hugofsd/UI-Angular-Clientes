import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  items: MenuItem[];
 

  constructor() { }
  
  ngOnInit() {
    this.servicos(); 
}




servicos(){
this.items = [
  {
    label: 'Dashboard',
    icon: 'pi pi-fw pi-home',
    routerLink: ['/dashboard'] 
  },
  
  {
    label: 'Consultas Veiculares',
    icon: 'pi pi-fw pi-search',
    routerLink: ['/consulta']
   },

  {
    label: 'Laudos Cautelares',
    icon: 'pi pi-fw pi-pencil',
    routerLink: ['/laudo']
    },


  {
      label: 'Contas',
      icon: 'pi pi-dollar',
      routerLink: ['/fatura']
  }, 

  {
  label: 'Ajuda',
  icon: 'pi pi-fw pi-question',
  routerLink: ['/ajuda']
  }

  


];

}



}

