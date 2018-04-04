import {Component,OnInit,ElementRef,Renderer} from "@angular/core";
declare var $:any;
@Component({
    selector:"top-home",
    templateUrl: "top-home.component.html",
    styleUrls:["top-home.component.scss"]
})

export class TopHomeComponent implements OnInit{
    ngOnInit(){

    }
    constructor(private renderer:Renderer,private elementRef:ElementRef){

    }

    handleTop(){
        $(window).scrollTop(0);
    }
}