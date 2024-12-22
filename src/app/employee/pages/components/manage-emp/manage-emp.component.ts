import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmpServiceService } from '../../../service/emp-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-emp',
  templateUrl: './manage-emp.component.html',
  styleUrl: './manage-emp.component.css'
})
export class ManageEmpComponent implements OnInit {
  employeeForm!: FormGroup

  constructor(private fb: FormBuilder, private employeeService: EmpServiceService, private router: Router) { }
  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zipCode: new FormControl(''),
      }),
      phone: new FormControl(''),
      website: new FormControl('')
    });
  }
  onSubmit() {


    this.employeeService.addEmployee(this.employeeForm.value).subscribe({
      next: (res) => {
        this.router.navigate(['/employee'])
      },
      error: (err) => {
        console.error('Error adding employee:', err);
      }
    })

  }

}
