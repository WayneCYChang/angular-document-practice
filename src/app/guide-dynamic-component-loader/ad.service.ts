import { Injectable } from '@angular/core';
import { AdItem } from './ad-item';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: 'Bombasto1', bio: 'Hi one'}),
      new AdItem(HeroProfileComponent, {name: 'Dr Q', bio: 'Hi two'}),
      new AdItem(HeroJobAdComponent, {headline: 'Hiring1', body: 'Hi body1'}),
      new AdItem(HeroJobAdComponent, {headline: 'hiring2', body: 'Hi body2'})
    ];
  }
}
