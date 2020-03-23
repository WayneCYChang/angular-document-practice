import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MissionService {

  constructor() { }

  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  announceMission(mission: string): void {
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(mission: string): void {
    this.missionConfirmedSource.next(mission);
  }
}
