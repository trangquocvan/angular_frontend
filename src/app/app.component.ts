import { Component,ElementRef,ViewChild,OnInit } from '@angular/core';
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
  constructor(){
    $('#select')
    .dropdown()
    ;
  }
  ngOnInit(){
    $('.ui.button').popup();
  }
}
