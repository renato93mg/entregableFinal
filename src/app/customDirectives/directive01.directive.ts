import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirective01]'
})
export class Directive01Directive {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'fontSize', '20px')
  }

}


