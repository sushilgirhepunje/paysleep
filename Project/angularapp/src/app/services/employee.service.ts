import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = "https://8080-bbfefdebbdfddbcfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api/EmployeeDetails"
  constructor(private http:HttpClient) { }
    getAllEmployee():Observable<any[]>{
      return this.http.get<any[]>(this.url+"/AllEmployeeDetails");
   }

   getEmployeById(employeeId:string):Observable<Employee>{
    
   }
}
