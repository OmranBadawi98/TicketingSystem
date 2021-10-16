import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectives]',
})
export class DirectivesDirective {
  constructor(public el: ElementRef, private renderer: Renderer2) {
    // el.nativeElement.style.color = 'blue';
  }
  @HostListener('mouseover') onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#9cbff7');
  }
  @HostListener('mouseout') onMouseOut() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '');
  }
}
