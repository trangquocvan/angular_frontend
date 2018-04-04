import { Component, OnInit, Input,Injectable,ViewChild,TemplateRef } from '@angular/core';
import {LoginService} from '../../services/login.services';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgModel,NgForm } from '@angular/forms';
import { User } from '../../model';
import { PopUpServices } from '../../services/popup.services';
import { PopUpComponent } from '../../layout/popup/popup.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { EventCommonServices } from '../../services/common/event.common.services';
import { AppService } from '../../app.service';


declare var $: any;
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
    
})
@Injectable()
export class LoginComponent implements OnInit{
    // @Input() user: User;
    ngOnInit(){
        $('.ui.dropdown').dropdown();
    }
    constructor(private LoginService: LoginService, private PopUpServices: PopUpServices,
        private modalService: NgbModal,private AppService:AppService){
    }
    user: User = {
        username: '',
        password: ''
    };
    @ViewChild('username')
    usernameRef: TemplateRef<any>;
    public showAlertError: boolean = false;
    handleLogin(){
        // this.LoginService.Login(this.user).subscribe();
        this.LoginService.getAll().subscribe(res =>{
            console.log(res);
        },error=>{
            console.log("ko thanh cong")
            // $("#myModal").modal();
            this.showAlertError = true;
            console.log(this.usernameRef)
        })
        this.LoginService.Login(this.user).subscribe(res =>{
            console.log(res);
        })
    }
    handleSelectLanguage(selected:string){
        this.AppService.setLanguage(selected);
    }
}   