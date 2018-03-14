import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './account/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    AccountComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        { path: 'home', redirectTo: 'app-home', pathMatch: 'full' },
        { path: 'account', component: AccountComponent,
          children:[
            { path: 'register',component: RegisterComponent }
          ]
        }
        // { path: 'index',component: AppComponent },
      //   { path: 'account',component: AccountComponent,
      // children: [
      //   { path: 'register', component: RegisterComponent },
      //   { path: 'login', component: LoginComponent }
      // ]
      // },
      //   { path: '**', redirectTo: 'app-home' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
