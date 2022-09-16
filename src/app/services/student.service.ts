import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudent() {
    return this.http.get<any[]>("http://localhost:8090/student");
  }
  getStudentByID(id:any) {
    return this.http.get<any>(`http://localhost:8090/student/${id}`);
  }
  saveNewStudent(data: any) {
    return this.http.post("http://localhost:8090/student/", data);
  }
  updateStudent(id: any, data: any) {
    return this.http.put(`http://localhost:8090/student/${id}`, data);
  }
  deleteStudent(id: any) {
    return this.http.delete(`http://localhost:8090/student/${id}`);
  }

}
