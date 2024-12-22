import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpServiceService } from '../../service/emp-service.service';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrl: './edit-emp.component.css'
})
export class EditEmpComponent implements OnInit{
  employeeId: string = '';
  editEmp!:FormGroup
  constructor(private route:ActivatedRoute,private empservice:EmpServiceService){}
  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id')!;
    this.empservice.getEmployeeById(Number(this.employeeId)).subscribe({
      next:(res)=>{
console.log(res);
this.editEmp= new FormGroup({
 
  id: new FormControl(''),
  name:new FormControl(res.name),
      username: new FormControl(res.username),
      email: new FormControl(res.email),
      address: new FormGroup({
        street: new FormControl(res.address.street),
        city: new FormControl(res.address.city),
      state:new FormControl(res.address.city),
        zipCode: new FormControl(res.address.zipcode),
      }),
      phone: new FormControl(res.phone),
      website: new FormControl(res.website)
})
      },
    })
  }
  onSubmit(){

  }

}
