// ./app/shared/hidden.directive.ts
import { Directive, ElementRef, Renderer } from '@angular/core';

// Directive decorator
@Directive({ selector: '[maxlength]' })
// Directive class
export class MaxLengthDirective {
    constructor(el: ElementRef, renderer: Renderer) {
     // Use renderer to render the element with styles
        renderer.setElementAttribute(el.nativeElement,'maxlength','2');
        
    }
}