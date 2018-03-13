import { Component, OnInit, ElementRef, ViewChild   } from '@angular/core';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {
  private elementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  public handleShowPopup() {
  }
}
