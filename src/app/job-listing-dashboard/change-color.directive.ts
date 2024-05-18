import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true,
})
export class ChangeColorDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseover') mouseover() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseout') mouseout() {
    this.el.nativeElement.style.backgroundColor = '';
  }

}
