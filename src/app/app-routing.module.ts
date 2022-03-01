import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './home/home.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: "/home"},
  {path: 'home', component: HomeComponent},
  {path: 'student-create', component: StudentCreateComponent},
  {path: 'student-list', component: StudentListComponent},
  {path: 'employees-list', component: EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
