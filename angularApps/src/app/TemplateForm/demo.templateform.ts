import {Component} from "@angular/core";
import { NgForm } from "@angular/forms";
// import { log } from "console";
// import HttpC
@Component({
    selector:'templateForm',
    templateUrl:'./demo.templateform.html'
})
export class TemplateForm{

    submitData(form:NgForm)
    {
        console.log(form.value);
        console.log(form.valid);
        
    }
    
}

