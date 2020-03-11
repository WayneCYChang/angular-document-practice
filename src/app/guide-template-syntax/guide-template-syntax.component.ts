import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-guide-template-syntax',
  templateUrl: './guide-template-syntax.component.html',
  styleUrls: ['./guide-template-syntax.component.css']
})
export class GuideTemplateSyntaxComponent implements OnInit {
  item: string;
  aUrl: string;
  inTheComponent: number;
  heroes: Hero[];
  isUnChanged: boolean;
  actionName: string;
  class: string;
  width: number;
  widthString: string;

  constructor() {
    this.item = 'interpolation';
    this.aUrl = '/';
    this.inTheComponent = 1;
    this.heroes = [
      new Hero(1, 'Windstorm')
    ];
    this.isUnChanged = true;
    this.actionName = 'actionName';
    this.class = 'class';
    this.width = 100;
    this.widthString = '280px';
  }

  ngOnInit(): void {
  }

  getVal(): number {
    return 1 + 1;
  }

  deleteHero(hero?: Hero): void { }

  onSubmit(form: HTMLFormElement): void { }
}
