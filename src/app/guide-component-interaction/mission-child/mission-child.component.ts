import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MissionService } from '../mission.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mission-child',
  templateUrl: './mission-child.component.html',
  styleUrls: ['./mission-child.component.css']
})
export class MissionChildComponent implements OnInit, OnDestroy {
  @Input() astronaut: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe( mission => {
      this.mission = mission;
      this.confirmed = false;
      this.announced = true;
    });
  }

  ngOnInit(): void {
  }

  confirm(): void {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
