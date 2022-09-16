import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students:any[]=[];
  myForm=new FormGroup({
    id:new FormControl("",[Validators.required]),
    studentName:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required]),
    age:new FormControl("",[Validators.required])
  })
  
  constructor(private studServ: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }
  editStudent(std:any){
    this.myForm=new FormGroup({
      id:new FormControl(std.id,[Validators.required]),
      studentName:new FormControl(std.studentName,[Validators.required]),
      address:new FormControl(std.address,[Validators.required]),
      age:new FormControl(std.age,[Validators.required])
    })
  }
  saveStudent(){
    this.studServ.updateStudent(this.myForm.controls["id"].value,this.myForm.value).subscribe(res=>{
      this.getStudents();
      alert("Student has been updated");
    })
  }
  deleteStudent(std:any){
    this.studServ.deleteStudent(std.id).subscribe(res=>{
      this.getStudents();
      alert("Student has been deleted");
    })
  }
  viewStudent(std:any){
    this.studServ.getStudentByID(std.id).subscribe(res=>{
      console.log(res);
    })
  }
  getStudents(){
    this.studServ.getStudent().subscribe(response=>{
      this.students=response;
    })
  }

}
