import { Component } from '@angular/core';

export interface Data {
  discipline: string,
  date: string,
  sportsman: string,
  country: string,
  record: string,
  place: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}