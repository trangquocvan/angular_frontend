import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppService } from '../../app.service';
import { Register } from '../../model';
import { Date } from '../../model';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { forEach } from '@angular/router/src/utils/collection';
import { RegisterServices } from "../../services/register.services";
declare var $: any;
@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    day: string[] = [];
    month: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    year: string[] = [];
    message: string;
    display: boolean = false;
    ngOnInit() {
        $('.ui.dropdown').dropdown({
            message: {
                noResults: "No result"
            }
            
        });
        
        for (var i = 1; i < 31; i++) {
            var tmp;
            tmp = i < 10 ? '0'+i : i;
            
            this.day.push(tmp.toString());
        }
        for (var i = 1900; i < 2018; i++) {
            this.year.push(i.toString());
        }
        console.log(this.user);
        // $('.ui.dropdown.day').dropdown("set selected", "01");
        // $('.ui.dropdown.month').dropdown("set selected", "11");
        // $('.ui.dropdown.year').dropdown("set selected", 1990);
        
    }
    constructor(public AppService: AppService, private RegisterServices: RegisterServices,private confirmationService:ConfirmationService) {
    }
    date:Date={
        day: "01",
        month: "01",
        year: "1900"
    }
    user: Register = {
        username: '',
        password: '',
        email: '',
        active: 0,
        sex: 1,
        country: 'vi',
        birdDay: this.date.year + '' +this.date.month + '' + this.date.day
    };

    // handleChangeCountry(name) {
    //     var currentUser = $('.selection.dropdown.day').dropdown('get value');
    //     console.log(currentUser);        
    // }
    // handleChangeDay(name:string){
    //     console.log(name)
    // }
    handleSelectLanguage(selected: string) {
        this.AppService.setLanguage(selected);
    }

    handleRegister() {

        this.RegisterServices.Register(this.user).subscribe(res => {
            console.log(res);

        }, error => {
            console.log("ko thanh cong")
            this.display = true;
            this.confirmationService.confirm({
                message: 'Are you sure that you want to perform this action?',
                accept: () => {
                    //Actual logic to perform a confirmation
                }
            });
        });
    }
}