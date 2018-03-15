import {Component, OnInit , EventEmitter, Output } from '@angular/core';
import { NgModel,NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
declare var $: any;
@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
    ngOnInit(){
        $('.ui.dropdown').dropdown();
    }
    constructor(){

    }
    handleSelectLanguage(selected:string){
        console.log(selected)
    }
}