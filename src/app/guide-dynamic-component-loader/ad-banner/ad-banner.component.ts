import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdHostDirective } from '../ad-host.directive';
import { Ad } from '../ad';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  currentIndex = -1;
  @ViewChild(AdHostDirective, {static: true}) adHost: AdHostDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  loadComponent(): void {
    this.currentIndex = (this.currentIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as Ad).data = adItem.data;
  }

  getAds(): void {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 1000);
  }
}
