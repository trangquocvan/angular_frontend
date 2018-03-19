import {Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Injectable,Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from './../model';
import { error } from 'util';
import { Jsonp } from '@angular/http/src/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class LoginService{
    url:string = "localhost/8080/login";
    
    constructor(private http:HttpClient){
    }
    Login(User:User) : Observable<User[]>{
        return this.http.post<User[]>(this.url,User,httpOptions);
    };
}