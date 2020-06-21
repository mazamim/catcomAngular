import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { TasksComponent } from './tasks/tasks.component';


const routes: Routes = [

  { path: '', component: HomeComponent, data: { breadcrumb: 'Dashboard' }},
  { path: 'employees', component: EmployeesComponent, data: { breadcrumb: 'Employees' }},
  { path: 'expenses', component: ExpensesComponent, data: { breadcrumb: 'Expenses' }},
  { path: 'tasks', component: TasksComponent, data: { breadcrumb: 'Tasks' }}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
