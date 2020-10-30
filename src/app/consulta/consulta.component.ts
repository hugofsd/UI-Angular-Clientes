import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  value: Date;

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
    data1:'11-03-2020',
    data2:'21-04-2020',
    data3:'03-02-2020',
    data4:'09-05-2020',
    data5:'13-06-2020',
    status1:'OK',
    status2:'OK',
    status3:'OK',
    status4:'OK',
    status5:'OK',
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
