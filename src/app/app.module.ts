//module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {TranslateService,TranslateStaticLoader,TranslateModule,TranslateLoader} from 'ng2-translate';
import { HttpModule } from '@angular/http';
import {Http} from '@angular/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
//component
import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './account/register/register.component';
import {LoginComponent} from './account/login/login.component';
//service
import { AppService } from './app.service';
import { LoginService } from './services/login.services';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    AccountComponent,
    RegisterComponent,
    LoginComponent
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
        }
    ]),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    }),
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
