import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  
  items:any[];

  constructor(private emp:EmployeeService) {
   }

  ngOnInit():void {
    this.loadItems();
  }

  loadItems():void{
    this.emp.getAllEmployee().subscribe(data=>{
      this.items=data;
    });
  }
 
  deleteEmployee(employeeId:number):void{
    this.emp.deleteEmployeeById(employeeId).subscribe(res=>{
      this.loadItems();
    })
  }

}


/*
/
Create(empdata:any){
	let resData:any="";
	let httpHeader:HttpHeaders= new HttpHeaders({
Accept:"application/json"
})
this.http.post(url+empdata,{headers:httpHeader}).subscribe(res=>{
resData=res;
},
error=>{
resData=error
 })
return resData
  }
}
/ 


//Add Details
onSubmitPost(postForm:NgForm){
  this.pay.Create(postForm.value);
  console.log("Added Successfully!!!");
}

<h1>Create</h1>
<form #postForm="ngForm" (ngSubmit)="onSubmitPost(postForm)">


moviedata:Imovie = {id:0,name:'',yearrelease:0,rating:0}
  constructor(private ms:MovieserviceService,private route:Router) { }
  saveData(movie:Imovie):void
  {
    this.moviedata = movie
    this.ms.addMovie(this.moviedata).subscribe(     
      ()=>{
      alert('Record Added Successfully')
      this.route.navigate(['/listmovies'])
      }
      )
  }


*/ 