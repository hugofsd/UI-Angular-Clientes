import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'dashboard';
  items: MenuItem[];

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

  {label: 'Laudos Cautelares', icon: 'pi pi-fw pi-pencil'},
  {label: 'Ajuda', icon: 'pi pi-fw pi-question'}, 

];

}
}
