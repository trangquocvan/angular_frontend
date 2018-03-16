import {Component, OnInit , EventEmitter, Output } from '@angular/core';
import { NgModel,NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppService } from '../../app.service';
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
    constructor(public AppService : AppService){

    }
    handleSelectLanguage(selected:string){
        this.AppService.setLanguage(selected);
    }
}