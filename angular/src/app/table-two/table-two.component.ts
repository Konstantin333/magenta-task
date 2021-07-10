import { Component, OnInit } from '@angular/core';
import { Data } from '../app.component';

@Component({
  selector: 'app-table-two',
  templateUrl: './table-two.component.html',
  styleUrls: ['./table-two.component.scss']
})
export class TableTwoComponent implements OnInit {

  dataTwo = {
    disciplines : [
      '50м', '60м', '200м', '400м', '800м', '1000м', '3000м', '5000м'
    ],
    dates : [
      '09.02.1995', '09.02.1995', '13.02.1993', '07.03.1982', '03.03.2002', '25.02.1999', '06.02.2014', '18.02.2009'
    ],
    sportsmen : [
      'Ирина Привалова', 'Ирина Привалова', 'Мерлин Отти', 'Ярмила Кратохвилова', 'Иоланда Чеплак', 'Мария Мутола', 'Гензебе Дибаба', 'Месерет Дифар'
    ],
    countries : [
      'Россия', 'Россия', 'Ямайка', 'Чехословакия', 'Словения', 'Мозамбик', 'Эфиопия', 'Эфиопия'
    ],
    records : [
      '5,96с', '6,92с', '21,87с', '49,59с', '1:55,82', '2:30,94', '8:16,60', '14:24,37'
    ],
    places : [
      'Мадрид, Испания', 'Мадрид, Испания', 'Льевен, Франция', 'Милан, Италия', 'Вена, Австрия', 'Стокгольм, Швеция', 'Стокгольм, Швеция', 'Стокгольм, Швеция'
    ]
  }
  
  arrayWomen: Data[] = []

  fillArray(){
    for(let i = 0; this.arrayWomen.length < 8; i++ ){
      this.arrayWomen.push(
        {
          discipline: this.dataTwo.disciplines[i],
          date: this.dataTwo.dates[i],
          sportsman: this.dataTwo.sportsmen[i],
          country: this.dataTwo.countries[i],
          record: this.dataTwo.records[i],
          place: this.dataTwo.places[i]
        }
      )
    }
  }

  public ngOnInit(): void {
    this.fillArray()
  }
}