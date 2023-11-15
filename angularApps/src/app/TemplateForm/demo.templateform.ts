import {Component} from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
// import { log } from "console";
// import HttpC
@Component({
    selector:'templateForm',
    templateUrl:'./demo.templateform.html'
})
export class TemplateForm{

    constructor (private activatedRouters:ActivatedRoute){
        console.log();
        
    }
    submitData(form:NgForm)
    {
        console.log(form.value);
        console.log(form.valid);
        
    }
    
}

