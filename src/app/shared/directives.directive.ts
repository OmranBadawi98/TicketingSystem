import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectives]',
})
export class DirectivesDirective {
  constructor(public el: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseover') onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#c5d2e9');
  }
  @HostListener('mouseout') onMouseOut() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '');
  }
}
