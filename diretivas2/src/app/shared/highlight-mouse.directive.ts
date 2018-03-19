import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    //this._renderer.setElementStyle(
    //  this._elementRef.nativeElement,
    //  'background-color', 'yellow'
    //);
    this.backgroundColor = 'yellow';
  };

  @HostListener('mouseleave') onMouseLeave(){
    //this._renderer.setElementStyle(
    //  this._elementRef.nativeElement,
    //  'background-color', 'white'
    //);
    this.backgroundColor = 'white';
  };

  // @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostBinding('style.backgroundColor') get setColor(){
    // codigo q nao sei o q vai ser colocado ainda
    return this.backgroundColor;
  };

  private backgroundColor: String;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { }

}
