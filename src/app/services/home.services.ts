import { Injectable,OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import {Product} from "./../model";
const httpOptions = {
    headers: new HttpHeaders(
        {
        'Access-Control-Allow-Origin':'*' }
    )
};
@Injectable()
export class HomeService implements OnInit {
    url:string = "http://localhost:8080/api/product";
    ngOnInit(){

    }
    constructor(private http:HttpClient){

    }
    getAll() : Observable<Product[]>{
        return this.http.get<Product []>(this.url,httpOptions);
    };
}