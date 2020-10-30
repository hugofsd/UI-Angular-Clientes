import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laudo',
  templateUrl: './laudo.component.html',
  styleUrls: ['./laudo.component.css']
})
export class LaudoComponent implements OnInit {

  value: Date;

  dados: Array<any> = [
    {
      id:'33.300',   
      placa: 'ABC-1234',
      modelo: 'BASE DE AGREGADOS',
      data:'11-03-2020',
      status:'Aprovado',
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
