import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-guide-structural-directives',
  templateUrl: './guide-structural-directives.component.html',
  styleUrls: ['./guide-structural-directives.component.css']
})
export class GuideStructuralDirectivesComponent implements OnInit {
  heroes: Hero[] = [
    {id: 1, name: 'Nail'},
    {id: 2, name: 'Jimmy'},
    {id: 3, name: 'Jason'}
  ];
  hero = 'k1';
  condition = true;

  constructor() { }

  ngOnInit(): void {
  }

}
