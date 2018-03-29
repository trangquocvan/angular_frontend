import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";


declare var $: any;
@Injectable()
export class PopUpServices{
    Popup(){
        return $("#myModal").modal();
    }
}