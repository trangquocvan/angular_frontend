import { Component, OnInit, Input } from '@angular/core';
import {LoginService} from '../../services/login.services';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgModel,NgForm } from '@angular/forms';
import { User } from '../../model';

declare var $: any;
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
    // @Input() user: User;
    ngOnInit(){
        $('.ui.dropdown').dropdown();
    }
    constructor(public user:User){

    }
    // user: User = {
    //     username: ' ',
    //     password: ''
    // };
    handleLogin(){
        
    }
}