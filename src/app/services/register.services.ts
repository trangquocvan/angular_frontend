import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from "../model";
const httpOptions = {
    headers: new HttpHeaders(
        {
        'Access-Control-Allow-Origin':'*' }
    )
};
@Injectable()
export class RegisterServices{
    url:string = "'https://jsonplaceholder.typicode.com/posts";
    constructor(private http:HttpClient){
    }
    Register(User:User):Observable<User[]>{
        return this.http.post<User[]>(this.url,User,httpOptions);
    }
}