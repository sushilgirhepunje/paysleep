import { Component } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
// import { error } from "console";
@Component({
	selector:'toekn-demo',
	template:`<h1> Token Demo<h1>`
})

export class TokenDemo{
    constructor( private http : HttpClient){
	let httpheaders:HttpHeaders = new HttpHeaders({
        Accept:'application/json'
    });
    this.http.post<Idata>("https:localhost:4434",{name:'user1',password:'password1'},{headers:httpheaders}).subscribe(token=>{console.log(token)},error=>{
        console.log(error);
    })
 }
}
interface Idata{
	user:string
	password:string
}