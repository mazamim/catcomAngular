import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ExpensesComponent } from './expenses/expenses.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';


const routes: Routes = [

  { path: '', component: HomeComponent, data: { breadcrumb: 'Dashboard' }},

  { path: 'expenses', component: ExpensesComponent, data: { breadcrumb: 'Expenses' }},
  { path: 'tasks', component: TasksComponent, data: { breadcrumb: 'Tasks' }},
  { path: 'employees', component: EmployeeListComponent, data: { breadcrumb: 'Employees' }},
  { path: 'addemp', component: EmployeeAddComponent, data: { breadcrumb: 'Add Employees' }},
  { path: 'register', component: AddStudentComponent },
  { path: 'edit/:id', component: EditStudentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
