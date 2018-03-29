import {Component, OnInit , EventEmitter, Output } from '@angular/core';
import { NgModel,NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppService } from '../../app.service';
import { User } from '../../model';
import { forEach } from '@angular/router/src/utils/collection';

declare var $: any;
@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
    day: string[] = [];
    user: User = {
        username: '',
        password: ''
    };
    month:string[] = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    year:string[] = [];
    message:string;

    ngOnInit(){
        $('.ui.dropdown').dropdown({
            message : {
                noResults: "No result"
            }
        });
        for(var i = 1;i < 31; i++){
            this.day.push(i.toString());
        }
        for(var i =1900; i < 2018;i++){
            this.year.push(i.toString());
        }
    }
    constructor(public AppService : AppService){

    }

    handleSelectLanguage(selected:string){
        this.AppService.setLanguage(selected);
    }
}