import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
// export class AddemployeeComponent implements OnInit {
  
//   constructor(private empService:EmployeeService,private route:Router) { }
 
//   ngOnInit():void{
//   }
//   onSubmitPost(postForm:NgForm):void{
//     this.empService.Create(postForm.value);
//     console.log();
//   }
  
// }

/*

//Add Details
onSubmitPost(postForm:NgForm){
this.pay.Create(postForm.value);
console.log("Added Successfully!!!");
}

<form #postForm="ngForm" (ngSubmit)="onSubmitPost(postForm)">
*/ 


// import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from '../services/employee.service';

// @Component({
//   selector: 'app-add-employee',
//   templateUrl: './add-employee.component.html',
//   styleUrls: ['./add-employee.component.css']
// })
export class AddemployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      empName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      gender: ['Male', Validators.required],
      address: ['', Validators.required],
      pinCode: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      // Form data is valid, proceed with submission
      this.employeeService.Create(this.employeeForm.value).subscribe(
        response => {
          // Handle success
          console.log("The data get added");
          
        },
        error => {
          // Handle error
          console.log(error)
        }
      );
    } else {
      // Form data is invalid, display error messages
      this.validateForm(this.employeeForm);
    }
  }

  validateForm(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateForm(control);
      } else {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }
}