import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;

  dados: Array<any> = [
    {
    id1:'33.300',
    id2: '33.330',
    id3: '33.340',
    id4: '33.350',
    id5: '33.324',
    placa1: 'ABC-1234',
    placa2: 'ABC-1224',
    placa3: 'ABC-1454',
    placa4: 'ABC-1224',
    placa5: 'ABC-1334',
    produto1: 'BASE DE AGREGADOS',
    produto2: 'BASE DE AGREGADOS',
    produto3: 'BASE DE AGREGADOS',
    produto4: 'BASE DE AGREGADOS',
    produto5: 'BASE DE AGREGADOS',
  },
  ];
  constructor() { 

    this.data = {
      labels: ['Pesquisas','Laudos'],
      datasets: [
          {
              data: [2, 1],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB"
                  
              ]
          }]    
      };
  }

  ngOnInit(): void {
  }

}
