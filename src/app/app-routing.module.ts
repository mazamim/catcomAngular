import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';


const routes: Routes = [

  { path: '', component: HomeComponent, data: { breadcrumb: 'Dashboard' }},

  { path: 'expenses', component: ExpensesComponent, data: { breadcrumb: 'Expenses' }},
  { path: 'tasks', component: TaskListComponent, data: { breadcrumb: 'Tasks' }},
  { path: 'projects', component: EmployeeListComponent, data: { breadcrumb: 'Employees' }},
  { path: 'employees', component: ProjectsListComponent, data: { breadcrumb: 'Projects' }},
  { path: 'clients', component: ClientListComponent, data: { breadcrumb: 'Clients' }},
  { path: 'addemp', component: EmployeeAddComponent, data: { breadcrumb: 'Add Employees' }},
  { path: 'register', component: AddStudentComponent },
  { path: 'edit/:id', component: EditStudentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
