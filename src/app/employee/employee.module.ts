import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpListComponent } from './pages/components/emp-list/emp-list.component';
import { ManageEmpComponent } from './pages/components/manage-emp/manage-emp.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import {HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EmpListComponent,
    ManageEmpComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
    
    ],
    exports:[
      HttpClientModule 
    ]
})
export class EmployeeModule { }
