import { Injectable,ElementRef,Directive,HostListener,Input } from "@angular/core";

@Directive({
    selector: '[submit-enter]'
})

export class EventCommonServices {
    private el: HTMLElement;
    
    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    @HostListener('window:keyup', ['$event']) keyEvent(e: KeyboardEvent) {
    console.log(e.keyCode)
    if (e.keyCode == 13) {
        
    }
   }
}