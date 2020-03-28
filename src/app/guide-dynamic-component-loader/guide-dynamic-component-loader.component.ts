import { Component, OnInit } from '@angular/core';
import { AdItem } from './ad-item';
import { AdService } from './ad.service';

@Component({
  selector: 'app-guide-dynamic-component-loader',
  templateUrl: './guide-dynamic-component-loader.component.html',
  styleUrls: ['./guide-dynamic-component-loader.component.css'],
  providers: [AdService]
})
export class GuideDynamicComponentLoaderComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) { }

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }

}
