import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private element: ElementRef,
    private render: Renderer
  ) {
    //console.log(this.element);
    //this.element.nativeElement.style.backgroundColor = "yellow";
    this.render.setElementStyle(this.element.nativeElement,'background-color','yellow');
  }

}
