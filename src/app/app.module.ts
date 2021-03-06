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
//component
import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './account/register/register.component';
import {LoginComponent} from './account/login/login.component';
import {PopUpComponent} from './layout/popup/popup.component';
import {HomeComponent} from './home/home.component';
//service
import { AppService } from './app.service';
import { LoginService } from './services/login.services';
import { HttpClient } from '@angular/common/http/src/client';
import { PopUpServices } from './services/popup.services';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
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
    NgbModule.forRoot()
  ],
  providers: [
    AppService,
    LoginService,
    PopUpServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
