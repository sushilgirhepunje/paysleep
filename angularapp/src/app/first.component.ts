import { Component } from "@angular/core";

@Component({
    selector:'first-component',
    templateUrl:'./first.component.html',
})

export class FirstComponent
{
    // names:string[] = ["Captain","Chef","Flower","Buddy"]\
    names:object[] =
    [
    {fname:"Captain",lname:"kanpur",email:'a@gmail.com'},
    {fname:"Flower",lname:"Parik",email:'f@gmail.com'},
    {fname:"Buddy",lname:"Mehata",email:'b@gmail.com'},
    {fname:"Kedar",lname:"Yele",email:'k@gmail.com'}
    ]
    // values="save";
    greet:string="Hello";
}