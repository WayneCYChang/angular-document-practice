import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-guide-displaying-data',
  templateUrl: './guide-displaying-data.component.html',
  styleUrls: ['./guide-displaying-data.component.css'],
  // Must not have both templateUrl and template
  // template: `
  //   <h1 ngNoneBindable>Inline Template{{property}}<h1>
  //   {{interpolation}}
  // `
})
export class GuideDisplayingDataComponent implements OnInit {
  interpolation = 'porperty';
  constructorInterpolation: string;
  heroes: string[];
  useClassHeroes: Hero[];

  constructor() {
    this.constructorInterpolation = 'Constructor Initalization';
    this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    this.useClassHeroes = [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Windstorm'),
      new Hero(15, 'Windstorm'),
      new Hero(20, 'Windstorm'),
    ]
  }

  ngOnInit(): void {
  }
}
