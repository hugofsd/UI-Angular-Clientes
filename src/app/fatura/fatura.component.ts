import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fatura',
  templateUrl: './fatura.component.html',
  styleUrls: ['./fatura.component.css']
})
export class FaturaComponent implements OnInit {

  tabela: any;

  dados: Array<any> =[
    {
      id1:'33.300',
      id2: '33.330',
      id3: '33.340',
      id4: '33.350',
      id5: '33.324',

      geracao1: '08/07/2020 14:48',
      geracao2: '08/08/2020 14:48',
      geracao3: '08/09/2020 14:48',
      geracao4: '08/10/2020 14:48',
      geracao5: '08/11/2020 14:48',

      vencimento1: '08/08/2020',
      vencimento2: '08/09/2020', 
      vencimento3: '08/10/2020', 
      vencimento4: '08/11/2020', 
      vencimento5: '08/12/2020', 


      valor1: 'R$ 50,00	',
      valor2: 'R$ 60,00	',
      valor3: 'R$ 70,00	',
      valor4: 'R$ 80,00	',
      valor5: 'R$ 100,00	',

      status1: 'Liquidado',
      status2: 'Vencido',

      descricao: 'Referente a pesquisa X.'


    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
