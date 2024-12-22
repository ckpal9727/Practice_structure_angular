import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/emp-modal';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  baseUrl='http://localhost:3000/employees'
  constructor(private httpClien:HttpClient) { }

  getAllEmp():Observable<Employee[]>{
    return this.httpClien.get<Employee[]>(this.baseUrl);
  }
  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClien.get<Employee>(`${this.baseUrl}/${id}`);
  }
  addEmployee(employee: Employee):Observable<Employee>{
    // return this.httpClien.post<Employee>(this.url)
    return this.httpClien.post<Employee>(`${this.baseUrl}`, employee);
  }

  updateEmployee(employee: Employee):Observable<Employee>{
    // return this.httpClien.post<Employee>(this.url)
    return this.httpClien.put<Employee>(`${this.baseUrl}/${employee.id}`, employee);
  }
  deleteEmployee(id:number):Observable<void>{
    return this.httpClien.delete<void>(`${this.baseUrl}/${id}`)
  }
}
