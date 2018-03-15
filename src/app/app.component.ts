import { Component,ElementRef,ViewChild,OnInit } from '@angular/core';
import {TranslateService} from 'ng2-translate';
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  public handleShowPopup(count){
    $('.ui.dropdown-ui')
    .modal('show');
  }
  constructor(private translate: TranslateService){
    translate.addLangs(['en','vi']);
    translate.setDefaultLang('vi');
    let browserlang = translate.getBrowserLang();
    translate.use(browserlang.match(/vi|en/) ? browserlang: "vi");
  }
  ngOnInit(){
    $('.ui.button').popup();
  }
  
}
