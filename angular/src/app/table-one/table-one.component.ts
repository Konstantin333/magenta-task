import { Component, OnInit } from '@angular/core';
import { Data } from '../app.component';

@Component({
  selector: 'app-table-one',
  templateUrl: './table-one.component.html',
  styleUrls: ['./table-one.component.scss']
})
export class TableOneComponent implements OnInit {

  dataOne = {
    disciplines : [
      '50м', '60м', '200м', '400м', '800м', '1000м', '3000м', '5000м'
    ],
    dates : [
      '09.02.1996', '03.03.2001', '18.02.1996', '12.03.2005', '09.03.1997', '20.02.2000', '06.02.1998', '20.02.2004'
    ],
    sportsmen : [
      'Донован Бейли', 'Морис Грин', 'Френки Фредерикс', 'Керон Клемент', 'Уилсон Кипкетер', 'Уилсон Кипкетер', 'Даниель Комен', 'Кенениса Бекеле'
    ],
    countries : [
      'Канада', 'США', 'Намибия', 'США', 'Дания', 'Дания', 'Кения', 'Эфиопия'
    ],
    records : [
      '5,56с', '6,39с', '19,92с', '44,57с', '1:42,67', '2:14,96', '7:24,90', '12:49,60'
    ],
    places : [
      'Рино, США', 'Атланта, США', 'Льевен, Франция', 'Фейетвилл, США', 'Париж, Франция', 'Бирмингем, Англия', 'Будапешт, Венгрия', 'Бирмингем, Англия'
    ]
  }
  
  arrayMen: Data[] = []

  fillArray(){
    for(let i = 0; this.arrayMen.length < 8; i++ ){
      this.arrayMen.push(
        {
          discipline: this.dataOne.disciplines[i],
          date: this.dataOne.dates[i],
          sportsman: this.dataOne.sportsmen[i],
          country: this.dataOne.countries[i],
          record: this.dataOne.records[i],
          place: this.dataOne.places[i]
        }
      )
    }
  }

  public ngOnInit(): void {
    this.fillArray()
  }

}