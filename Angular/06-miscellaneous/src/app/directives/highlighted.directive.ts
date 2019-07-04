import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor(private _el: ElementRef) { }

  @Input("appHighlighted") newColor: string;

  private highLight(color: string) {
    this._el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') mouseIn() {
    this.highLight(this.newColor || "yello2");
  }

  @HostListener('mouseleave') mouseOut() {
    this.highLight(null);
  }  
}
