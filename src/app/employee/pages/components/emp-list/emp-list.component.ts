import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../../../service/emp-service.service';
import { Employee } from '../../../model/emp-modal';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent implements OnInit {
  constructor(private empService:EmpServiceService){}
  employees: Employee[]=[];
  
  ngOnInit(): void {
    this.empService.getAllEmp().subscribe(x=>{
      this.employees=x
      console.log(x)
    });
  }

}
