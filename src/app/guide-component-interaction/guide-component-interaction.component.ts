import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Hero } from '../hero';
import { InteractionChildComponent } from './interaction-child/interaction-child.component';
import { MissionService } from './mission.service';

@Component({
  selector: 'app-guide-component-interaction',
  templateUrl: './guide-component-interaction.component.html',
  styleUrls: ['./guide-component-interaction.component.css'],
  providers: [MissionService]
})
export class GuideComponentInteractionComponent implements OnInit, AfterViewInit {
  heroes: Hero[] = [
    {id: 1, name: 'k1'},
    {id: 2, name: 'k2'},
    {id: 3, name: 'k3'},
  ];
  name = ['Dr    IQ', '   ', '  Bombasto  '];
  master = 'master';
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  missions = ['Fly to moon', 'Fly to mars', 'Fly to vegas'];
  nextMission = 0;

  @ViewChild(InteractionChildComponent) child: InteractionChildComponent;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe( astronaut => {
      console.log(`${astronaut} confirmed the mission`);
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('Guild Interaction' + this.child.inTheChild);
  }

  onVoted($event: string): void {
    console.log($event);
  }

  announce(): void {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    console.log(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }
}
