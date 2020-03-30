import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highlightColor: string;
  @Input('appHighlight') highlightColor2: string;

  constructor(private el: ElementRef) {
    console.log(el);
    console.log(el.nativeElement);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.highlightColor2 || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
