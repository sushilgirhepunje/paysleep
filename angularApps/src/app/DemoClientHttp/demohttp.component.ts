import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector:'http-client',
    template:`<h1>Hello</h1>`
})
export class HttpDemo{
    _http:HttpClient = null;
    constructor(http:HttpClient){
        this._http = http;
        this._http.get("https://8080-bbfefdebbdfddbcfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/swagger/index.html").subscribe((data)=>{
            console.log(data);
        },(failure)=>{
            console.log(failure);
        });
        // this._http.post();
        // this._http.put();
        // this._http.post();

    }
}