import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './pages/components/emp-list/emp-list.component';
import { ManageEmpComponent } from './pages/components/manage-emp/manage-emp.component';
import { EditEmpComponent } from './pages/edit-emp/edit-emp.component';


const routes: Routes = [
  {path:'',component:EmpListComponent},
  {path:'add',component:ManageEmpComponent},
  {path:':id',component:EditEmpComponent},
  
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  
  ],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
