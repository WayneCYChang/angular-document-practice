import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ConverSelfElementComponent } from './conver-self-element/conver-self-element.component';

@Component({
  selector: 'app-guide-elements',
  templateUrl: './guide-elements.component.html',
  styleUrls: ['./guide-elements.component.css']
})
export class GuideElementsComponent implements OnInit {

  constructor(injector: Injector) {
    const selfElement = createCustomElement(ConverSelfElementComponent, {injector});

    customElements.define('hihihi-self', selfElement);
  }

  ngOnInit(): void {
  }

}
