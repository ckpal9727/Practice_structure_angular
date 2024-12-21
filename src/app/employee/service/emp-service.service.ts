import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/emp-modal';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  url='http://localhost:3000/employees'
  constructor(private httpClien:HttpClient) { }

  getAllEmp():Observable<Employee[]>{
    return this.httpClien.get<Employee[]>(this.url);
  }
}
