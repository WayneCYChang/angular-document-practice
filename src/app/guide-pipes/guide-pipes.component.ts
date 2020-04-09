import { Component, OnInit } from '@angular/core';
import { HEROES } from './heroes';
import { HEROESTWO } from './heroes-two';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-guide-pipes',
  templateUrl: './guide-pipes.component.html',
  styleUrls: ['./guide-pipes.component.css']
})
export class GuidePipesComponent implements OnInit {
  birthday = new Date(1988, 3, 3);
  toggle = true;
  heroes: any[] = [];
  private heroes2 = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];
  canFly = true;
  heroes$: Observable<string>;
  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }

  constructor() {
    this.reset();
  }

  ngOnInit(): void {
  }

  toggleFormat(): void {
    this.toggle = !this.toggle;
  }

  addHero(named: string): void {
    named = named.trim();
    const hero = {name: named, canFly: this.canFly};
    if (!named) { return; }
    this.heroes.push(hero);
  }

  removeHero(named: string): void {
    this.heroes.splice(this.heroes.indexOf(named) + 1, 1);
  }

  changeHero(): void {
    this.heroes = HEROESTWO.slice(); // use slice to return a new array
  }

  changeBoolean(hero: any, input: string): void {
    if (input === 'true') {
      hero.canFly = true;
    } else {
      hero.canFly = false;
    }
    console.log(hero);
  }

  triggerObs(): void {
    this.heroes$ = interval(500).pipe(
      map(x => this.heroes2[x]),
      take(this.heroes2.length)
    );
  }

  reset(): void {
    this.heroes = HEROES.slice(); // use slice to return a new array
  }
}
