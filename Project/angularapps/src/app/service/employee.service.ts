import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Employee } from '../models/employee';
// import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = "https://8080-bbfefdebbdfddbcfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api/Employee";

  constructor(private httpclient: HttpClient) { }

  // Get the list of employees 
  getAllEmployee(): Observable<any[]> {
    return this.httpclient.get<any[]>(this.url + '/AllEmployeeDetails');
  }
 
    // add employee 
  Create(empdata:any){
    let resData:any="";
    let httpHeader:HttpHeaders=new HttpHeaders({
      Accept:"application/json"
    })
   this.httpclient.post("https://8080-bbfefdebbdfddbcfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api/Employee/InsertEmployeeDetails",empdata,{headers:httpHeader}).subscribe(res=>{
    resData=res;
   },
   error=>{
    resData=error
   })
   return resData
  }

}
