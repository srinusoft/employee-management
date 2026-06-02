import { Routes } from '@angular/router';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  { path: 'employees', component: ListEmployeesComponent },
  { path: 'employees/create', component: CreateEmployeeComponent },
  { path: "**", redirectTo: 'employees'}
];
