import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { AppService } from './app.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  startedClass = false;
  completedClass = false;
  preventAbuse = false;
  public handleShowPopup(count) {
    $('.ui.dropdown-ui')
      .modal('show');
  }

  constructor(private translate: TranslateService, public AppService: AppService) {
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang('vi');
    let browserlang = translate.getBrowserLang();
    translate.use(browserlang.match(/vi|en/) ? browserlang : "vi");
  }
  ngOnInit() {
    $('.ui.button').popup();
    this.AppService.change.subscribe(language => {
      this.translate.use(language);
      console.log(language)
    });
  }
  onStarted() {
    this.startedClass = true;
    setTimeout(() => {
      this.startedClass = false;
    }, 800);
  }

  onCompleted() {
    this.completedClass = true;
    setTimeout(() => {
      this.completedClass = false;
    }, 800);
  }
}
