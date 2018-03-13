import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        { path: 'home', redirectTo: 'app-home', pathMatch: 'full' },
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
