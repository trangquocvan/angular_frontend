import {Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Injectable,Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from './../model';
import { error } from 'util';
import { Jsonp } from '@angular/http/src/http';
import {LoginComponent} from '../account/login/login.component';
const httpOptions = {
    headers: new HttpHeaders(
        {
        'Access-Control-Allow-Origin':'*' }
    )
};
@Injectable()
export class LoginService{
    url:string = "http://localhost:8080/api/user";
    
    constructor(private http:HttpClient){
    }
    Login(User:User) : Observable<User[]>{
        return this.http.post<User[]>(this.url,User,httpOptions);
    };
    getAll() : Observable<User[]>{
        return this.http.get<User[]>(this.url,httpOptions);
    };
}