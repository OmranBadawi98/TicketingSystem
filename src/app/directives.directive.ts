import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectives]',
})
export class DirectivesDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'red';
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
