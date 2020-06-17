import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';


const routes: Routes = [

  { path: '', component: HomeComponent, data: { breadcrumb: 'Dashboard' }},
  { path: 'employees', component: EmployeesComponent, data: { breadcrumb: 'Employees' }}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
