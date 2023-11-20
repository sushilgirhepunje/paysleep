import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = "https://8080-bbfefdebbdfddbcfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api/Employee"
  constructor(private http:HttpClient) { }
    getAllEmployee():Observable<Employee[]>{
      return this.http.get<Employee[]>(this.url+"/AllEmployeeDetails");
   }

   getEmployeById(employeeId:string):Observable<Employee>{
    return this.http.get<Employee>(this.url+"/GetEmployeeDetailsById"+employeeId);
   }

   createEmployee(employee:Employee):Observable<Employee>{
    const httpOptions = {headers:new HttpHeaders({'Context-Type':'application/json'})}
    return this.http.post<Employee>(this.url+'/InsertEmployeeDetails/',employee,httpOptions);
   }

   updateEmployee(employee:Employee):Observable<Employee>{
    const httpOptions = {headers:new HttpHeaders({'Context-Type':'application/json'})}
    return this.http.put<Employee>(this.url+'/InsertEmployeeDetails/',employee,httpOptions);
   }
  //  deleteEmployee(employee:Employee):Observable<Employee>{
  //   const httpOptions = {headers:new HttpHeaders({'Context-Type':'application/json'})}
  //   return this.http.delete<Employee>(this.url+'/InsertEmployeeDetails/',employee,httpOptions);
  //  }
}

/*
import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../services/movieservice.service';



@Component({
  selector: 'app-listmovie',
  templateUrl: './listmovie.component.html',
  styleUrls: ['./listmovie.component.css']
})
export class ListmovieComponent implements OnInit {

  moviedata : any[] = []
  
  constructor(private ms:MovieserviceService) 
  {
     this.ms.getAllMovies().subscribe(data=>{this.moviedata.push(...data)})
     console.log(this.moviedata)
  }

  ngOnInit() {
  }

}



html

<div class = "container">
    <div class="jumbotron">
        <h2 style="text-align: center; padding-bottom: 10px;">Movie Listing</h2>
        <table class ="table">
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Year</th>
            </thead>
            <tbody>
              <tr>
                <tr *ngFor="let m of moviedata">
                    <td>{{m.id}}</td>
                    <td>{{m.name}}</td>
                    <td>{{m.rating}}</td>
                    <td>{{m.yearRelease}}</td>
               </tr>     
                    <td>
                        <a [routerLink]="['/findmovie/',m.id]">Details</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a [routerLink]="['/edit/',m.id]">Edit </a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a [routerLink]="['/delete/',m.id]">Delete </a>&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
*/ 

/*
export interface Imovie {

id:number
name: string
yearrelease:number
rating:number

}
*/ 