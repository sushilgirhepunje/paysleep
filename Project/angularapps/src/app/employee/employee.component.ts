import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

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
}


/*
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