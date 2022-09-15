import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"main",component:MainComponent,children:[
    {path:"",component:DashboardComponent},
    {path:"student",component:StudentComponent},
    {path:"course",component:CourseComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
