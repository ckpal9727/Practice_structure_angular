import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './pages/components/emp-list/emp-list.component';


const routes: Routes = [
  {path:'',component:EmpListComponent},
  
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
