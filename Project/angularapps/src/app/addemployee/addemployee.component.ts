import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../service/employee.service';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  empdata:Employee = {
    EmpId: '',
    EmpName: '',
    DateOfBirth: null,
    EmailId: '',
    Gender: '',
    Address: '',
    PinCode: '',
  };

  
  constructor(private empService:EmployeeService,private route:Router) { }
  onSubmitPost(postForm:NgForm){
    this.empService.Create(postForm.value);
    console.log();
    // this.empdata = employee
    // this.empService.Create(this.empdata).subscribe(     
    //   ()=>{
    //   alert('Record Added Successfully')
    //   this.route.navigate(['/AllEmployeeDetails'])
    //   }
    // )
    
  }
/*

//Add Details
  onSubmitPost(postForm:NgForm){
    this.pay.Create(postForm.value);
    console.log("Added Successfully!!!");
  }

<form #postForm="ngForm" (ngSubmit)="onSubmitPost(postForm)">
*/ 
  ngOnInit() {
  }

}
