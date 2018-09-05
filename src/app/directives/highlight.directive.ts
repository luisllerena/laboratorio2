import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('appHighLight')
  appHighLight: string;

  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.setBorderStyle('1px none black');
  }

  @HostListener('mouseenter')
  onmouseenter() {
    this.setBorderStyle('5px solid red');
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.setBorderStyle('1px none black');
  }
  
  public setBorderStyle(estilo: string) {
    this.el.nativeElement.style.border  = estilo;
  }

  public setBackground(color?) {
    this.el.nativeElement.style.backgroundColor = color || this.appHighLight;
  }
}
