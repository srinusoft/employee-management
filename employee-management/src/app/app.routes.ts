import { Routes } from '@angular/router';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

export const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: ListEmployeesComponent },
  { path: 'employees/create', component: CreateEmployeeComponent },
  { path: "**", redirectTo: 'employees'}
];
