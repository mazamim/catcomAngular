import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';

import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { AttendanceComponent } from './employee/attendance/attendance.component';
import { AttendanceReportComponent } from './reports/attendance-report/attendance-report.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { RefreshComponent } from './refresh/refresh.component';
import { ProjectsEditComponent } from './projects/projects-edit/projects-edit.component';
import { AddBulkTicketComponent } from './projects/add-bulk-ticket/add-bulk-ticket.component';
import { ShowallprojectsComponent } from './projects/showallprojects/showallprojects.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [

  { path: '', component: HomeComponent, data: { breadcrumb: 'Dashboard' }},
  { path: 'addbulk', component: AddBulkTicketComponent, data: { breadcrumb: 'add' }},
  { path: 'test', component: TestComponent, data: { breadcrumb: 'Tasks' }},
  { path: 'tasks', component: TaskListComponent, data: { breadcrumb: 'Tasks' }},
  { path: 'projects', component: ProjectsListComponent, data: { breadcrumb: 'Projects' }},
  { path: 'viewall', component: ShowallprojectsComponent, data: { breadcrumb: 'viewall' }},
  { path: 'projects/:id', component: ProjectsEditComponent,data: { breadcrumb: 'Edit Project' }},
  { path: 'employees', component: EmployeeListComponent, data: { breadcrumb: 'Employees' }},
  { path: 'customers', component: CustomerListComponent, data: { breadcrumb: 'Employees' }},
  { path: 'attendancereport', component: AttendanceReportComponent, data: { breadcrumb: 'Reports' }},
  { path: 'employees/:id', component: EmployeeEditComponent},
  { path: 'refresh', component: RefreshComponent},

  { path: 'clients', component: ClientListComponent, data: { breadcrumb: 'Clients' }},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
