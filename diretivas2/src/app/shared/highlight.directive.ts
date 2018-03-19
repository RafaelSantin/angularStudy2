import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    //this._renderer.setElementStyle(
    //  this._elementRef.nativeElement,
    //  'background-color', 'yellow'
    //);
    this.backgroundColor = this.hightLightColor;
  };

  @HostListener('mouseleave') onMouseLeave(){
    //this._renderer.setElementStyle(
    //  this._elementRef.nativeElement,
    //  'background-color', 'white'
    //);
    this.backgroundColor = this.defaultColor;
  };

  // @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostBinding('style.backgroundColor') get setColor(){
    // codigo q nao sei o q vai ser colocado ainda
    return this.backgroundColor;
  };

  @Input() defaultColor: string = 'white';
  @Input('appHighlight') hightLightColor: string = 'yellow';


  private backgroundColor: String;

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

  constructor() { }

}
