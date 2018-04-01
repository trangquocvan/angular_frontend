// ./app/shared/hidden.directive.ts
import { Directive, ElementRef, Renderer } from '@angular/core';

// Directive decorator
@Directive({ selector: '[form]' })
// Directive class
export class FormDirective {
    constructor(el: ElementRef, renderer: Renderer) {
     // Use renderer to render the element with styles
        renderer.setElementAttribute(el.nativeElement,'maxlength','16');
        console.log(el.nativeElement.className);
    }
}