import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  constructor(private studentServ:StudentService,private rt:Router) { }
  myForm=new FormGroup({
    studentName:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required]),
    age:new FormControl("",[Validators.required])
  })
  ngOnInit(): void {
  }
  saveStudent(){
    console.log(this.myForm.value);
    this.studentServ.saveNewStudent(this.myForm.value).subscribe(resp=>{
      alert("Student has been save successfully!");
      this.rt.navigateByUrl("/main/student")
    })
  }
}
