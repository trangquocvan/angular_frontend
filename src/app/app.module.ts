//module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {TranslateService,TranslateStaticLoader,TranslateModule,TranslateLoader} from 'ng2-translate';
import { HttpModule } from '@angular/http';
import {Http} from '@angular/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';  
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module'; 
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';


//api
//component
import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './account/register/register.component';
import {LoginComponent} from './account/login/login.component';
import {PopUpComponent} from './layout/popup/popup.component';
import {TopHomeComponent} from './layout/top-home/top-home.component';

import {HomeComponent} from './home/home.component';
//service
import { AppService } from './app.service';
import { LoginService } from './services/login.services';
import { HttpClient } from '@angular/common/http/src/client';
import { PopUpServices } from './services/popup.services';
import { HomeService } from './services/home.services';
import { RegisterServices } from "./services/register.services";
import {ConfirmationService} from 'primeng/api';


//import shared
import { SharedModule } from './shared/shared.module';


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    AccountComponent,
    RegisterComponent,
    LoginComponent,
    PopUpComponent,
    HomeComponent,
    TopHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
        { path: 'home', redirectTo: 'app-home', pathMatch: 'full' },
        { path: 'account', component: AccountComponent,
          children:[
            { path: 'register',component: RegisterComponent },
            { path: 'login',component: LoginComponent }
          ]
        },
        { path: 'home',component: HomeComponent }
        
    ]),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    }),
    HttpClientModule,
    NgHttpLoaderModule,
    NgbModule.forRoot(),
    AccordionModule,
    DialogModule,
    ConfirmDialogModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule,    
    SharedModule
  ],
  providers: [
    AppService,
    LoginService,
    PopUpServices,
    HomeService,
    RegisterServices,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
