import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:any;
  classes:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getEmployeesData();
    this.getPaathamData();
  }


  getEmployeesData() {
    this.dataService.getData().subscribe( res => {
      this.employees = res;
    });
  }
  getPaathamData() {
    this.dataService.getDataPaatham().subscribe( res => {
      console.log(res);
      this.classes = res;
      
    });
  }

}
