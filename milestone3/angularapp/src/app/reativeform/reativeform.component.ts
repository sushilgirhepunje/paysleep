import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reativeform',
  templateUrl: './reativeform.component.html',
  styleUrls: ['./reativeform.component.css']
})
export class ReativeformComponent implements OnInit {
  error:string="";
  demoForm:any;
  constructor(private formBuilder:FormBuilder) {
    this.demoForm = this.formBuilder.group({
      fullName:['',Validators.required],
      mobileNumber:['',Validators.required],
      email:['',Validators.email],
      address:['',Validators.required],
      area:['',Validators.required],
      pickupDay:['',Validators.required],
      pickupTimeSlot:['',Validators.required],
      packageId:['',Validators.required],
      statusId:['',Validators.required],
      expectedDeliveryDate:['',Validators.required]
      
    })
   }

  ngOnInit():void {
  }

}


/*

 error:string = "";
   demoForm:any;
   constructor(private formBuilder:FormBuilder){
    this.demoForm = this.formBuilder.group({
      email:['',Validators.email],
      password:['',Validators.required],
      opt:['Select',Validators.required],
      gender:['',Validators.required],
      user:['',Validators.required],
      chkValue:[false],
      startDate:['',Validators.required]


    })
   }
  
   display(){
      console.log(this.demoForm.value);
      this.demoForm.get('user').errors;
      console.log(this.demoForm.valid);
   }
   reset(){
      this.demoForm.reset();
   }
   // if(this.form.get('email').hasError('required'))
   // {
   //    this.error ="Email is required";
   // }
   // console.log(this.form.invalid);
   // }
   //    //console.log(this.form.get('email').hasError('required'));
     
   // }


     //console.log(userData.controls.email.value);
   
}

*/ 


/*

[
  {
    "id": 0,
    "fullName": "string",
    "mobileNumber": "string",
    "email": "user@example.com",
    "address": "string",
    "area": "string",
    "pincode": "517108",
    "pickupDay": "string",
    "pickupTimeSlot": "string",
    "packageId": 0,
    "package": {
      "id": 0,
      "name": "string",
      "description": "string",
      "pricePerKg": 0,
      "clothesPerMonth": 0
    },
    "statusId": 0,
    "status": {
      "id": 0,
      "name": "string"
    },
    "expectedDeliveryDate": "2023-11-25T04:39:37.207Z"
  }
]
*/ 